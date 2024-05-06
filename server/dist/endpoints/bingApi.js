var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    const apiKey = 'fe13aa45a7654f10b3f81e30f5e0b5ab';
    const endpoint = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(search)}&mkt=en-us&freshness=Day&count=10&category=News&safeSearch=Strict&module=Images`;
    try {
        const response = yield fetch(endpoint, {
            method: 'GET',
            headers: { 'Ocp-Apim-Subscription-Key': apiKey },
        });
        if (!response.ok) {
            throw new Error(`error: ${res.status}`);
        }
        const data = yield response.json();
        const organizedData = Object.values(data.value).map((value) => {
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
        res.send(organizedData);
    }
    catch (err) {
        console.error('error', err);
        res.status(500).send('error fetching search result');
    }
});
// console.log('this is sort => : ', data.sort);
// console.log('this is _type => : ', data._type);
// console.log('this is _type => : ', data.readLink);
// console.log(
// 	'this is totalEstimates matches => ',
// 	data.totalEstimatedMatches
// );
// console.log('this is query context => : ', data.queryContext);
//# sourceMappingURL=bingApi.js.map