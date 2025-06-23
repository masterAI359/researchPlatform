// services/runCrawler.ts
import { CheerioCrawler } from 'crawlee';
import { Readability } from '@mozilla/readability';
import { JSDOM } from 'jsdom';
import { ArticleInput, SelectedArticle } from './apifyScraper';

export async function runCrawler(startUrls: string[]) {
    const results: { url: string; title?: string; content?: string }[] = [];

    const crawler = new CheerioCrawler({
        requestHandler: async ({ request, body }) => {
            const html = body.toString(); // Convert Buffer to string
            const dom = new JSDOM(html, { url: request.url });

            const reader = new Readability(dom.window.document);
            const article = reader.parse();

            results.push({
                url: request.loadedUrl ?? request.url,
                title: article?.title ?? 'N/A',
                content: article?.textContent ?? 'N/A'
            });
        }
    });

    await crawler.run(startUrls.map(url => ({ url })));

    return results;
}
