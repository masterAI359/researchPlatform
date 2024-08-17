var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem.js';
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../../../.env');
console.log('Loading .env from:', envPath);
console.log(envPath);
dotenv.config({ path: envPath });
console.log({ 'TLDR Key': process.env.TLDR_KEY }); // TODO: Contacting my bank to allow payment for RapidAPI 
const TLDRKey = process.env.TLDR_KEY; // Need to up the limit for TLDR.This API, ran through the free 100 credits
export const tldrSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recieved = req.query.q;
    const query = JSON.parse(decodeURIComponent(recieved));
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    if (!Array.isArray(query) || query.length === 0) {
        return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
    }
    try {
        const dataMap = query.map((article) => __awaiter(void 0, void 0, void 0, function* () {
            console.log({ "fetching data for: ": article.url });
            const response = yield fetch(url, {
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
                throw new Error(`Failed to fetch Summary for ${article.url}`);
            }
            const data = yield response.json();
            data.logo = article.logo;
            data.source = article.source;
            data.date = article.date;
            return data;
        }));
        const results = yield Promise.allSettled(dataMap); // [{status: 'successful / failed', value: {...}}, {status: 'successful / failed', value: {...}}, {status: 'successful / failed', value: {...}}]
        const resultsMap = results.filter((result) => result.status === 'fulfilled').map((result) => result.value);
        const resultsDecoded = decodeItem(resultsMap);
        res.send(resultsDecoded);
    }
    catch (error) {
        console.error("Error: " + error);
        res.status(500).send("An error occured trying to fetch articles from TLDR");
    }
});
//# sourceMappingURL=tldrSummary.js.map