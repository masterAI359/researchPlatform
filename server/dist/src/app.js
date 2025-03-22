import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const supabaseURL = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;
const app = express();
import { bingArticles } from '../endpoints/bingApi.js';
import { tldrSummary } from '../endpoints/tldrSummary.js';
import { deleteUser } from '../endpoints/deleteUser.js';
dotenv.config({ path: '../../.env' });
const corsOptions = {
    origin: '*',
    methods: 'OPTIONS, HEAD, GET, PUT, POST, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
};
app.use(cors(corsOptions));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});
app.use(express.static(path.join(__dirname, 'dist')));
console.log("Serving: " + path.join(__dirname, '../../../client/dist', 'index.html'));
app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, HEAD, GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.sendStatus(200);
});
export const supabase = createClient(supabaseURL, supabaseServiceKey, {
    auth: {
        persistSession: true
    }
});
const port = 5001;
app.get('/search/articles', bingArticles);
app.get('/summarize', tldrSummary);
app.get('/deleteUser', deleteUser);
app.get('*', (req, res) => {
    try {
        console.log("Serving: " + path.join(__dirname, 'dist', 'index.html'));
        res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    }
    catch (err) {
        if (err.code === 'ECONNRESET') {
            console.error('Connection reset by client');
            res.status(500).send('Lost Network Connection');
        }
    }
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map