const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../.env');
import { TLDR_KEY } from '../src/Config.js';
import { Request, Response } from 'express'
import * as path from 'path'
import { fileURLToPath } from 'url';
import { FailedAttempt, TldrRequest } from './interfaces.js';
import { paramDecode } from '../helpers/decodeItem.js';
import { mapTldrRequests } from '../services/mapTldrRequests.js';
import { MappedTldrRequests } from '../types/types.js';

export const tldrSummary = async (req: Request, res: Response): Promise<void> => {

    let failed: FailedAttempt[] = [];
    const { articles } = req.body;

    if (!articles) {
        res.status(400).json({ error: "No articles recieved to scrape" });
        return;
    };


    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    const api_host = 'tldrthis.p.rapidapi.com';

    try {
        const results: MappedTldrRequests = await mapTldrRequests(
            articles,
            failed,
            TLDR_KEY,
            url,
            api_host
        );

        res.status(200).json(results);
        return;

    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
        return;
    };
};