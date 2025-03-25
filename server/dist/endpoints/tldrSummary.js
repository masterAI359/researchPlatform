const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../../.env');
import { TLDR_KEY } from '../src/Config';
import * as path from 'path';
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem';
export const tldrSummary = async (req, res) => {
    let failure = [];
    const received = req.query.q;
    console.log({ "Recieved Query": received }, typeof received);
    const paramDecode = (item) => {
        try {
            const decodedQuery = decodeURIComponent(item.replace(/\+/g, " "));
            if (decodedQuery) {
                return decodedQuery;
            }
        }
        catch (error) { }
        throw new Error(`Malformed URI error${res.status(500)}`);
    };
    const parsedQuery = JSON.parse(paramDecode(received));
    const decodedQueryArray = parsedQuery;
    const query = decodedQueryArray;
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';
    function delay(t) {
        return new Promise(resolve => setTimeout(resolve, t));
    }
    if (!Array.isArray(query) || query.length === 0) {
        return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
    }
    try {
        const dataMap = query.map(async (article, index) => {
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
                data.logo = article.logo;
                data.source = article.source;
                data.date = article.date;
                const decodedData = decodeItem(data);
                return decodedData;
            }
            catch (error) {
                console.error(`Error processing article ${article.url}:`, error);
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
        });
        const results = await Promise.allSettled(dataMap);
        const returnValues = results.map((result) => {
            const resultData = result.value ? result.value : result.reason;
            return resultData;
        });
        const success = returnValues.filter((result) => result !== undefined);
        const resultsObject = { retrieved: success, rejected: failure };
        res.json(resultsObject);
        failure = [];
    }
    catch (error) {
        console.error("Error in tldrSummary:", error);
        res.status(500).send('Internal Server Error');
    }
};
//# sourceMappingURL=tldrSummary.js.map