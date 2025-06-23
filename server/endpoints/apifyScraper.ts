// services/runCrawler.ts
import { PlaywrightCrawler } from 'crawlee';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import { BiasTypes, getMediaBiases } from './mediaBias.js';

export interface ArticleInput {
    url: string;
    title: string;
    image: string;
    logo: string
}

export interface SelectedArticle {
    url: string,
    source: string,
    date: string,
    logo: string,
    title: string,
    image: string
}

interface Enriched {
    url: string,
    source: string,
    date: string,
    logo: string,
    title: string,
    image: string,
    bias: string,
    factual_reporting: string,
    country: string
}


function enrich(articles: SelectedArticle[], biases: BiasTypes[]) {
    const biasMap = new Map(biases.map((b: BiasTypes) => [b.name, b]))
    const data = articles.map((article: SelectedArticle) => {
        const biasData = biasMap.get(article.source) ?? { bias: "Unknown", factual_reporting: "Unknown", country: "Unknown" };

        return { ...article, bias: biasData.bias, factual_reporting: biasData.factual_reporting, country: biasData.country };
    });
    return data;
};


export async function apifyScraper(articles: SelectedArticle[]) {
    const results: {
        url: string;
        title: string;
        image: string;
        logo: string,
        bias: string,
        factual_reporting: string,
        country: string,
        source: string,
        content?: string;
        excerpt?: string;
    }[] = [];

    const crawler = new PlaywrightCrawler({
        headless: true,
        maxConcurrency: 3,
        navigationTimeoutSecs: 15,
        requestHandler: async ({ request, page }) => {

            await page.route('**/*', (route) => {
                const resource = route.request().resourceType();
                if (['image', 'media', 'font', 'stylesheet'].includes(resource)) {
                    route.abort();
                } else {
                    route.continue();
                }
            });

            const { title, image, logo, source, bias, factual_reporting, country } = request.userData as Enriched;
            const html = await page.content();
            const dom = new JSDOM(html, { url: request.url });
            dom.window.document.querySelectorAll('style, script, noscript').forEach(el => el.remove());
            const reader = new Readability(dom.window.document);
            const article = reader.parse();
            let content = article?.textContent ?? null;

            if (!content || content.length < 500) {
                content = await page.evaluate(() => document.body.innerText);
            };


            results.push({
                url: request.url,
                title: title,
                image: image,
                logo: logo,
                bias: bias,
                factual_reporting: factual_reporting,
                country: country,
                source: source,
                content: content?.replace(/\.(\s*)([A-Z])/g, '.\n\n$2') ?? 'N/A',
                excerpt: article?.excerpt ?? 'N/A'
            });
        }
    });

    const ratings = await Promise.all(articles.map(async (article) => {
        const rating = await getMediaBiases(article.source);
        return rating ?? {
            name: article.source,
            bias: 'Unknown',
            factual_reporting: 'Unknown',
            country: 'Unknown'
        }
    }
    )
    );

    if (ratings) {
        const enrichedArticles = enrich(articles, ratings);
        await crawler.run(enrichedArticles.map(a => (
            {
                url: a.url,
                userData: {
                    title: a.title,
                    image: a.image,
                    logo: a.logo,
                    source: a.source,
                    bias: a.bias,

                }
            })));
    }

    return results;
};