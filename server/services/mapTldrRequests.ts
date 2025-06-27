import { FailedAttempt, MappedTldrRequests, ScrapedArticle, TldrRequest } from "../types/types";
import cleanseAuthorList from '../helpers/authorCleanup';
import decodeItem from '../helpers/decodeItem';
import { getMediaBiases } from '../endpoints/mediaBias';
import { cleanURL } from '../helpers/cleanUrl';
import { delay } from '../helpers/throttle';
import { getPromiseValues } from '../helpers/getPromiseValues';

export async function mapTldrRequests(query: TldrRequest[], failed: FailedAttempt[], TLDR_KEY: string, url: string, api_host: string): Promise<MappedTldrRequests> {

    const dataMap = query.map(async (article, index): Promise<ScrapedArticle | null> => {

        const santizedSource = article.source.trim();
        const biasRatings = await getMediaBiases(santizedSource);
        const urlClean = cleanURL(article.url);
        await delay(index * 2000);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': TLDR_KEY,
                    'x-rapidapi-host': api_host,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: urlClean,
                    num_sentences: 5,
                    is_detailed: true,
                })
            });

            if (!response.ok) {
                const errorText = await response.text();
                console.error(`Failed to fetch summary for ${article.url}: ${response.status} ${response.statusText} - ${errorText}`);
                throw new Error(`Failed to fetch summary for ${article.url}: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            data.logo = article.logo;
            data.source = article.source;
            data.date = article.date;
            data.bias = biasRatings?.bias ?? null;
            data.country = biasRatings?.country ?? null;
            data.factual_reporting = biasRatings?.factual_reporting ?? null;
            const decodedData: ScrapedArticle = decodeItem(data);
            decodedData.article_authors = cleanseAuthorList(decodedData.article_authors);
            return decodedData;
        } catch (error) {
            const failedAttempt: FailedAttempt = {
                title: article.title,
                summary: [{ denied: 'We were denied access to the article from', failedArticle: `${article.source} - ${article.title}` }],
                logo: article.logo,
                source: article.source,
                date: article.date,
                article_url: article.url,
            }
            failed.push(failedAttempt);
            return null;
        };

    });

    const results = await Promise.allSettled(dataMap);
    const returnValues = getPromiseValues(results);
    const resultsObject = { retrieved: returnValues, rejected: failed };
    return resultsObject;
};