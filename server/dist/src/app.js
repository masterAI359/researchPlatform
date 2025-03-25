import './Config.js';
import { PORT } from './Config.js';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express from 'express';
import cors from 'cors';
const app = express();
import { bingArticles } from '../endpoints/bingApi.js';
import { tldrSummary } from '../endpoints/tldrSummary.js';
import { deleteUser } from '../endpoints/deleteUser.js';
const corsOptions = {
    origin: 'https://elenchusapp.io',
    methods: 'OPTIONS, HEAD, GET, PUT, POST, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
const clientDistPath = path.resolve(__dirname, '../../../client/dist');
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://elenchusapp.io');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.sendStatus(200);
});
app.get('/search/articles', bingArticles);
app.get('/summarize', tldrSummary);
app.get('/deleteUser', deleteUser);
app.get('*', (req, res) => {
    try {
        const filePath = path.resolve(clientDistPath, 'index.html');
        console.log("Serving:", filePath);
        res.sendFile(filePath);
    }
    catch (err) {
        if (err.code === 'ECONNRESET') {
            console.error('Connection reset by client');
            res.status(500).send('Lost Network Connection');
        }
    }
});
app.listen(PORT, () => {
    return console.log(`Express is listening at ${PORT}`);
});
//# sourceMappingURL=app.js.map