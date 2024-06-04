var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import cors from 'cors';
const app = express();
import { bingArticles, bingGeneral } from '../endpoints/bingApi.js';
import pkg from 'pg';
const corsOptions = {
    origin: '*',
    methods: 'OPTIONS, HEAD, GET, PUT, POST, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept'
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.sendStatus(200);
});
const { Client } = pkg;
const client = new Client('postgresql://said:LWK2SWytsTGJFYIyWHBP3Q@cluster0-14450.7tt.aws-us-east-1.cockroachlabs.cloud:26257/elenchus?sslmode=verify-full');
client
    .connect()
    .then(() => console.log('Connected to the Elenchus Database'))
    .catch((err) => console.error('Error connecting to database: ', err));
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const results = yield client.query('SELECT NOW()');
    }
    catch (err) {
        console.error('error executing query:', err);
    }
}))();
const port = 5001;
app.get('/', (req, res) => {
    res.send('Hello World');
});
app.get('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const queryResult = yield client.query('SELECT NOW() as current_time;');
        const currentTime = queryResult.rows[0].current_time;
        res.send(`Current Time: ${currentTime}`);
    }
    catch (err) {
        console.error('Error executing query', err.stack);
        res.status(500).send('Error executing query');
    }
}));
//testing bing api search
app.get('/search', bingGeneral);
app.get('/search/articles', bingArticles);
// app.get('/search/images', bingImages);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map