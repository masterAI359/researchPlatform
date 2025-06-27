const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../.env');
import { TLDR_KEY } from '../src/Config.js';
import { Request, Response } from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem.js'
import cleanseAuthorList from '../helpers/authorCleanup.js';
import { getMediaBiases } from './mediaBias.js';
import { FailedAttempt, ScrapedArticle, TldrRequest } from './interfaces.js';
import { cleanURL } from '../helpers/cleanUrl.js';
import { paramDecode } from '../helpers/decodeItem.js';
import { getPromiseValues } from '../helpers/getPromiseValues.js';
import { delay } from '../helpers/throttle.js';

export const tldrSummary = async (req: Request, res: Response): Promise<void> => {

    let failure: FailedAttempt[] = [];
    const received = req.query.q as string;

    if (!received) {
        res.status(400).json({ error: "Missing query parameter 'q'" });
        return;
    };

    let parsedQuery: unknown;

    try {
        parsedQuery = JSON.parse(paramDecode(received));
    } catch (e) {
        console.error("Invalid JSON query:", e);
        res.status(400).json({ error: "Invalid JSON in query parameter" });
        return
    }

    if (!Array.isArray(parsedQuery)) {
        res.status(400).json({ error: "Query parameter must be an array of requests." });
        return;
    };

    const decodedQueryArray = parsedQuery as TldrRequest[];
    const query = decodedQueryArray;
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    const api_host = 'tldrthis.p.rapidapi.com';

    if (!Array.isArray(query) || query.length === 0) {
        res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
        return;
    };

    try {
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
                        'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
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
                failure.push(failedAttempt)
                return null
            }
        });

        const results = await Promise.allSettled(dataMap);
        const returnValues = getPromiseValues(results);
        const resultsObject = { retrieved: returnValues, rejected: failure }
        res.status(200).json(resultsObject);
        return;
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
        return;
    };
};







