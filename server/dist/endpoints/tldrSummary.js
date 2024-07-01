var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
//# sourceMappingURL=tldrSummary.js.map