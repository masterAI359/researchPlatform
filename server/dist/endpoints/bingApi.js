var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import he from 'he'; //ran --save-dev @types/he... may need to change this to regular dependency instead of dev dependancy
//import fetch from 'node-fetch';
//import cheerio from 'cheerio';
export const bingGeneral = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //declare search string from user's input
    const search = req.query.q;
    const apiKey = 'fe13aa45a7654f10b3f81e30f5e0b5ab';
    //declare endpoint with the search
    const endpoint = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(search)}&mkt=en-us`;
    console.log('test123');
    try {
        const response = yield fetch(endpoint, {
            //https request to get the search's response
            method: 'GET',
            headers: { 'Ocp-Apim-Subscription-Key': apiKey },
        });
        if (!response.ok) {
            throw new Error(`error: ${res.status}`);
        }
        const data = yield response.json();
        res.send(data);
    }
    catch (err) {
        console.error('error', err);
        res.status(500).send('error fetching search result');
    }
});
export const bingArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.query.q;
    const apiKey = 'ce2d91d82a8749c3a4f0eb2a64d9c77a';
    const endpoint = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(search)}+-site:msn.com&mkt=en-us&freshness=Day&count=10&category=Articles&safeSearch=Strict&module=Images&responsiveFilter=News&textFormat=HTML`;
    try {
        const response = yield fetch(endpoint, {
            method: 'GET',
            headers: { 'Ocp-Apim-Subscription-Key': apiKey },
        });
        if (!response.ok) {
            throw new Error(`error: ${res.status}`);
        }
        const data = yield response.json();
        function decodeItem(item) {
            if (item == undefined || item == null) {
                return item;
            }
            if (Array.isArray(item)) {
                const decodedItem = item.map((element) => {
                    return decodeItem(element);
                });
                return decodedItem;
            }
            else if (typeof item === "object") {
                const decodedItem = Object.entries(item).reduce((acc, [key, value]) => {
                    acc[key] = decodeItem(value);
                    return acc;
                }, {});
                return decodedItem;
            }
            else if (typeof item === "string") {
                const decodedItem = he.decode(item);
                return decodedItem;
            }
        }
        const dataValues = data.value;
        const decodedData = dataValues.map((item) => decodeItem(item));
        if (!Array.isArray(decodedData)) {
            throw new Error('expected an array of articles');
        }
        const organizedData = Object.values(decodedData).map((value) => {
            var _a, _b, _c, _d;
            return {
                name: value.name,
                url: value.url,
                image: {
                    img: ((_a = value.image) === null || _a === void 0 ? void 0 : _a.thumbnail) ? value.image.thumbnail.contentUrl : null,
                    width: ((_b = value.image) === null || _b === void 0 ? void 0 : _b.thumbnail) ? value.image.thumbnail.width : null,
                    height: ((_c = value.image) === null || _c === void 0 ? void 0 : _c.thumbnail) ? value.image.thumbnail.height : null,
                },
                description: value.description,
                keywords: [
                    (_d = value === null || value === void 0 ? void 0 : value.about) === null || _d === void 0 ? void 0 : _d.map((keyword) => {
                        return keyword.name;
                    }),
                ],
                provider: value.provider[0].name,
                datePublished: value.datePublished,
            };
        });
        const result = {
            date: new Date().getDate(),
            data: organizedData,
        };
        res.send(result);
    }
    catch (err) {
        console.error('error', err);
        res.status(500).send('error fetching search result');
    }
});
export const tldrSummary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = req.query.q;
    const url = 'https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/';
    try {
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                //put api in a env after
                'x-rapidapi-key': '3e0ff041dcmsh136e954b7ef530bp1da9d4jsn1f72dfc74936',
                'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: query,
                num_sentences: 5,
                is_detailed: true,
            }),
        });
        const result = yield response.text();
        res.send(result);
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=bingApi.js.map