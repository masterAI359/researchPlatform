"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bingArticles = exports.bingGeneral = void 0;
var bingGeneral = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var search, apiKey, endpoint, response, data, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                search = req.query.q;
                apiKey = 'fe13aa45a7654f10b3f81e30f5e0b5ab';
                endpoint = "https://api.bing.microsoft.com/v7.0/search?q=".concat(encodeURIComponent(search), "&mkt=en-us");
                console.log('test123');
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(endpoint, {
                        //https request to get the search's response
                        method: 'GET',
                        headers: { 'Ocp-Apim-Subscription-Key': apiKey },
                    })];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("error: ".concat(res.status));
                }
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                res.send(data);
                return [3 /*break*/, 5];
            case 4:
                err_1 = _a.sent();
                console.error('error', err_1);
                res.status(500).send('error fetching search result');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.bingGeneral = bingGeneral;
var bingArticles = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var search, apiKey, endpoint, response, data, organizedData, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                search = req.query.q;
                apiKey = 'fe13aa45a7654f10b3f81e30f5e0b5ab';
                endpoint = "https://api.bing.microsoft.com/v7.0/news/search?q=".concat(encodeURIComponent(search), "&mkt=en-us&freshness=Day&count=10&category=News&safeSearch=Strict&module=Images");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(endpoint, {
                        method: 'GET',
                        headers: { 'Ocp-Apim-Subscription-Key': apiKey },
                    })];
            case 2:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error("error: ".concat(res.status));
                }
                return [4 /*yield*/, response.json()];
            case 3:
                data = _a.sent();
                organizedData = Object.values(data.value).map(function (value) {
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
                            (_d = value === null || value === void 0 ? void 0 : value.about) === null || _d === void 0 ? void 0 : _d.map(function (keyword) {
                                return keyword.name;
                            }),
                        ],
                        provider: value.provider[0].name,
                        datePublished: value.datePublished,
                    };
                });
                res.send(organizedData);
                return [3 /*break*/, 5];
            case 4:
                err_2 = _a.sent();
                console.error('error', err_2);
                res.status(500).send('error fetching search result');
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.bingArticles = bingArticles;
// console.log('this is sort => : ', data.sort);
// console.log('this is _type => : ', data._type);
// console.log('this is _type => : ', data.readLink);
// console.log(
// 	'this is totalEstimates matches => ',
// 	data.totalEstimatedMatches
// );
// console.log('this is query context => : ', data.queryContext);
