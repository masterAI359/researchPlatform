var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import decodeItem from '../helpers/decodeItem.js';
export const tldrSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const recieved = req.query.q;
    const query = JSON.parse(decodeURIComponent(recieved));
    console.log(query);
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/';
    if (!Array.isArray(query) || query.length === 0) {
        return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
    }
    try {
        const dataMap = query.map((articleLink) => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield fetch(url, {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': '3e0ff041dcmsh136e954b7ef530bp1da9d4jsn1f72dfc74936',
                    'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: articleLink,
                    num_sentences: 5,
                    is_detailed: true,
                })
            });
            if (!response.ok) {
                throw new Error(`Failed to fetch Summary for ${articleLink}`);
            }
            const data = yield response.json();
            console.log(data);
            return data;
        }));
        const results = yield Promise.all(dataMap);
        const decodedResults = decodeItem(results);
        res.send(decodedResults);
    }
    catch (error) {
        console.error("Error: " + error);
        res.status(500).send("An error occured trying to fetch articles from TLDR");
    }
});
//# sourceMappingURL=tldrSummary.js.map