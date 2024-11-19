import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem.js'
import { logoMap } from './logoMap.js'
import { hostname } from 'os'

//TODO: Implelemnt some progress values when fetching summary data, we must display
//to the user how long they'll be waiting or it feels even more drawn out while nothing happens 


const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../../.env');

dotenv.config({ path: envPath })

const TLDRKey = process.env.TLDR_KEY as string

interface QueryType {
    url: string,
    source: string,
    date: string,
    logo: string,
    title: string
}


export const tldrSummary = async (req: Request, res: Response) => {
    const received = req.query.q as string;
    const query: QueryType[] = JSON.parse(decodeURIComponent(received));

    const numArticles = query.length;

    const url =
        'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';

    if (!Array.isArray(query) || query.length === 0) {
        return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
    }

    try {
        const dataMap = query.map(async (article) => {
            try {
                console.log({ "fetching data for: ": article.url });

                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'x-rapidapi-key': TLDRKey,
                        'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        url: article.url,
                        num_sentences: 5,
                        is_detailed: true,
                    })
                });

                if (!response.ok) {
                    console.error(`Failed to fetch Summary for ${article.url}`);
                    throw new Error(`Failed to fetch Summary for ${article.url}`);
                }

                const data = await response.json();
                data.logo = article.logo;
                data.source = article.source;
                data.date = article.date;
                const decodedData = decodeItem(data)
                return decodedData;
            } catch (error: any) {
                console.error(`Error processing article ${article.url}:`, error);
                // Return an object with the original article data plus the error message
                return {
                    failed: true,
                    title: article.title,
                    summary: [{ denied: 'We were denied access to the article from', failedArticle: `${article.source} - ${article.title}` }],
                    logo: article.logo,
                    source: article.source,
                    date: article.date,
                    article_url: article.url,
                };
            }
        });

        const results = await Promise.allSettled(dataMap);
        const returnValues = results.map((result: any) => { //this is returning null | Why?

            const resultData = result.value ? result.value : result.reason

            return resultData
        })
        res.json(returnValues);

    } catch (error) {
        console.error("Error in tldrSummary:", error);
        res.status(500).send('Internal Server Error');
    }
};







