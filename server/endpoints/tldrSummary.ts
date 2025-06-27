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

    if (!Array.isArray(parsedQuery) || parsedQuery.length === 0) {
        res.status(400).json({ error: "Query parameter must be an array of requests." });
        return;
    };

    const decodedQueryArray = parsedQuery as TldrRequest[];
    const query = decodedQueryArray;
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    const api_host = 'tldrthis.p.rapidapi.com';

    try {
        const results: MappedTldrRequests = await mapTldrRequests(
            query,
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