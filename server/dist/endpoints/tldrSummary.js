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
//TODO: Implelemnt some progress values when fetching summary data, we must display
//to the user how long they'll be waiting or it feels even more drawn out while nothing happens 
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });
const TLDRKey = process.env.TLDR_KEY;
export const tldrSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const received = req.query.q;
    const query = JSON.parse(decodeURIComponent(received));
    const numArticles = query.length;
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    if (!Array.isArray(query) || query.length === 0) {
        return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
    }
    try {
        const dataMap = query.map((article) => __awaiter(void 0, void 0, void 0, function* () {
            try {
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
                    console.error(`Failed to fetch Summary for ${article.url}`);
                    throw new Error(`Failed to fetch Summary for ${article.url}`);
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
        }));
        const results = yield Promise.allSettled(dataMap);
        const returnValues = results.map((result) => {
            const resultData = result.value ? result.value : result.reason;
            return resultData;
        });
        res.json(returnValues);
    }
    catch (error) {
        console.error("Error in tldrSummary:", error);
        res.status(500).send('Internal Server Error');
    }
});
//# sourceMappingURL=tldrSummary.js.map