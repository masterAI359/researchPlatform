import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import type { Request, Response } from 'express';
import decodeItem from '../helpers/decodeItem.js';
import { logoMap } from './logoMap.js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../../.env') });
const NEWSAPI_KEY = process.env.NEWS_API as string;
const logoMapData = new Map(Object.entries(logoMap));


export async function newsApi(req: Request, res: Response) {
    console.log('/newsArticles hit')

    try {
        const q = (req.query.q as string) || '';
        const query = decodeURIComponent(q);
        const pageSize = (req.query.count as string) || '30';
        const page = (req.query.page as string) || '1';

        const url = new URL('https://newsapi.org/v2/everything');
        if (q) url.searchParams.set('q', query);
        url.searchParams.set('language', 'en');
        url.searchParams.set('sortBy', 'publishedAt');
        url.searchParams.set('pageSize', pageSize);
        url.searchParams.set('page', page);

        const r = await fetch(url.toString(), { headers: { 'X-Api-Key': NEWSAPI_KEY } });
        if (!r.ok) {
            const text = await r.text();
            return res.status(r.status).json({ error: text || r.statusText });
        }

        const json = await r.json();
        console.log(json)

        const mapped = (json.articles ?? []).map((a: any) => {
            const d = new Date(a.publishedAt);
            const datePublished = d.toString().split(' ').splice(0, 4).join(' ');
            return {
                name: a.title ?? '',
                url: a.url ?? '',
                image: { img: a.urlToImage ?? null, width: null, height: null },
                description: a.description ?? '',
                keywords: [[]],
                provider: a.source.name,
                datePublished,
            };
        });
        const shapedArticles = mapped.map((article: any) => {
            const provider = article.provider.replace(/\s+/g, '').toLowerCase();

            if (logoMapData.has(provider)) {
                article.logo = logoMapData.get(provider)
            } else {
                article.logo = logoMapData.get("fallback")
            }
            return article
        });

        const decoded = shapedArticles.map((article: any) => {
            return (decodeItem(article));
        });

        const lookup = new Map(decoded.map((item: any) => [item.url, item]));

        console.log(lookup.size);

        return res.json({ date: null, data: decoded, optionsLookup: lookup });
    } catch (err) {
        console.error('newsApiArticles error:', err);
        return res.status(500).json({ error: 'Failed to fetch articles' });
    }
};
