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
const envPath = path.resolve(__dirname, '../../.env');
dotenv.config({ path: envPath });
const TLDRKey = process.env.TLDR_KEY;
export const tldrSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let failure = [];
    const received = req.query.q;
    console.log({ "Recieved Query": received }, typeof received);
    const paramDecode = (item) => {
        return decodeURIComponent(item.replace(/\+/g, " "));
    };
    const query = JSON.parse(paramDecode(received));
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    function delay(t) {
        return new Promise(resolve => setTimeout(resolve, t));
    }
    if (!Array.isArray(query) || query.length === 0) {
        return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
    }
    try {
        const dataMap = query.map((article, index) => __awaiter(void 0, void 0, void 0, function* () {
            //   console.log({ "fetching data for: ": article.url });
            yield delay(index * 2000);
            try {
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
                    const errorText = yield response.text();
                    console.error(`Failed to fetch summary for ${article.url}: ${response.status} ${response.statusText} - ${errorText}`);
                    throw new Error(`Failed to fetch summary for ${article.url}: ${response.status} ${response.statusText}`);
                }
                const data = yield response.json();
                data.logo = article.logo;
                data.source = article.source;
                data.date = article.date;
                const decodedData = decodeItem(data);
                return decodedData;
            }
            catch (error) {
                console.error(`Error processing article ${article.url}:`, error);
                // Return an object with the original article data plus the error message
                const failedAttempt = {
                    title: article.title,
                    summary: [{ denied: 'We were denied access to the article from', failedArticle: `${article.source} - ${article.title}` }],
                    logo: article.logo,
                    source: article.source,
                    date: article.date,
                    article_url: article.url,
                };
                failure.push(failedAttempt);
            }
        }));
        const results = yield Promise.allSettled(dataMap);
        const returnValues = results.map((result) => {
            const resultData = result.value ? result.value : result.reason;
            return resultData;
        });
        const success = returnValues.filter((result) => result !== undefined);
        const resultsObject = { retrieved: success, rejected: failure };
        // console.log(resultsObject)
        res.json(resultsObject);
        failure = [];
    }
    catch (error) {
        console.error("Error in tldrSummary:", error);
        res.status(500).send('Internal Server Error');
    }
});
//# sourceMappingURL=tldrSummary.js.map