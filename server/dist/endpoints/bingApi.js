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
import { logoMap } from './logoMap.js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url);
const __dirname = path.dirname(envUrl);
const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath });
const BingKey = process.env.BING_KEY;
export const bingArticles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const search = req.query.q;
    //const apiKey = 'ce2d91d82a8749c3a4f0eb2a64d9c77a';
    const endpoint = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(search)}+-site:msn.com&mkt=en-us&count=20&category=Articles&safeSearch=Strict&module=Images&responseFilter=News&textFormat-videos=HTML`;
    console.log(search);
    try {
        const response = yield fetch(endpoint, {
            method: 'GET',
            headers: { 'Ocp-Apim-Subscription-Key': BingKey },
        });
        if (!response.ok) {
            throw new Error(`error: ${res.status(500)}`);
        }
        const data = yield response.json();
        const dataValues = data.value;
        const decodedData = dataValues.map((item) => decodeItem(item));
        const articlesWithLogos = Object.values(decodedData).map((article) => {
            const provider = article.provider[0].name.replace(/\s+/g, '').toLowerCase();
            if (logoMap.has(provider)) {
                article.logo = logoMap.get(provider);
            }
            else {
                article.logo = logoMap.get("fallback");
            }
            return article;
        });
        const organizedData = Object.values(articlesWithLogos).map((value) => {
            var _a, _b, _c, _d;
            const stringDate = new Date(value.datePublished).toString();
            const formattedDate = stringDate.split(' ').splice(0, 4).join(' ');
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
                datePublished: formattedDate,
                logo: value.logo
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
//# sourceMappingURL=bingApi.js.map