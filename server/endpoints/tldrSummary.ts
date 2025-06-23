const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../.env');
import { TLDR_KEY } from '../src/Config.js';
import express, { query, Request, Response } from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem.js'
import cleanseAuthorList from '../helpers/authorCleanup.js';
import { getMediaBiases } from './mediaBias.js';


interface QueryType {
    url: string,
    source: string,
    date: string,
    logo: string,
    title: string,
    image: string
}

const cleanURL = (url: string) => {
    try {
        const u = new URL(url);
        u.search = ""; // removes query params
        return u.toString();
    } catch {
        return url;
    }
}



export const tldrSummary = async (req: Request, res: Response) => {

    let failure: any = [];

    const received = req.query.q as string;

    const paramDecode = (item: string) => {

        try {
            const decodedQuery = decodeURIComponent(item.replace(/\+/g, " "));
            if (decodedQuery) {
                return decodedQuery
            }
        } catch (error) { }

        throw new Error(`Malformed URI error${res.status(500)}`)
    }

    const parsedQuery = JSON.parse(paramDecode(received))

    const decodedQueryArray = parsedQuery


    const query: QueryType[] = decodedQueryArray;

    const url =
        'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';


    function delay(t: number) {
        return new Promise(resolve => setTimeout(resolve, t));
    }

    if (!Array.isArray(query) || query.length === 0) {
        return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
    }

    try {
        const dataMap = query.map(async (article, index) => {

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
                const decodedData = decodeItem(data);
                decodedData.cleanedAuthors = cleanseAuthorList(decodedData.article_authors);
                return decodedData;
            } catch (error: any) {
                const failedAttempt = {
                    title: article.title,
                    summary: [{ denied: 'We were denied access to the article from', failedArticle: `${article.source} - ${article.title}` }],
                    logo: article.logo,
                    source: article.source,
                    date: article.date,
                    article_url: article.url,
                }
                failure.push(failedAttempt)

            }
        });

        const results = await Promise.allSettled(dataMap);


        const returnValues = results.map((result: any) => {

            const resultData = result.value ? result.value : result.reason

            return resultData
        })

        const success = returnValues.filter((result: any) => result !== undefined)

        const resultsObject = { retrieved: success, rejected: failure }
        res.json(resultsObject);
        failure = null
    } catch (error) {
        // console.error("Error in tldrSummary:", error);
        res.status(500).send('Internal Server Error');
    }
};







