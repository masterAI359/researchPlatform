import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem.js'


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

            console.log({ "fetching data for: ": article.url });

            await delay(index * 2000);

            try {
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
                    const errorText = await response.text();
                    console.error(`Failed to fetch summary for ${article.url}: ${response.status} ${response.statusText} - ${errorText}`);
                    throw new Error(`Failed to fetch summary for ${article.url}: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();

                if (data.article_image === 'undefined') {
                    console.log(data.article_image)
                }

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
        const returnValues = results.map((result: any) => {

            const resultData = result.value ? result.value : result.reason

            return resultData
        })
        res.json(returnValues);

    } catch (error) {
        console.error("Error in tldrSummary:", error);
        res.status(500).send('Internal Server Error');
    }
};







