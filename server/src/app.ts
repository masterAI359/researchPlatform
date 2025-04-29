import './Config.js'
import { PORT } from './Config.js';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import express, { Request, Response } from 'express';
import cors from 'cors';
import mime from 'mime'

const app = express();
import { bingArticles } from '../endpoints/bingApi.js';
import { tldrSummary } from '../endpoints/tldrSummary.js';
import { deleteUser } from '../endpoints/deleteUser.js';
import { searchBlueSkyPosts } from '../endpoints/blueskyApi.js';
import { getBlueSkyFeed } from '../endpoints/blueskyApi.js';


const corsOptions: object = {
	origin: 'https://elenchusapp.io',
	methods: 'OPTIONS, HEAD, GET, PUT, POST, DELETE',
	allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
};

app.use(cors(corsOptions));

app.use(function (req, res, next) {
	res.header(
		'Access-Control-Allow-Methods',
		'OPTIONS, HEAD, GET, PUT, POST, DELETE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

const clientDistPath = path.resolve(__dirname, '../../../client/dist');

mime.define({ 'image/svg+xml': ['svg'] });


app.use(
	express.static(path.join(clientDistPath), {
		setHeaders: (res, filePath) => {
			if (filePath.endsWith('.svg')) {
				res.setHeader('Content-Type', 'image/svg+xml');
			}
		},
	})
);



app.options('*', (req, res) => {
	res.header('Access-Control-Allow-Origin', 'https://elenchusapp.io');
	res.header(
		'Access-Control-Allow-Methods',
		'OPTIONS, HEAD, GET, PUT, POST, DELETE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	res.sendStatus(200);
});




app.get('/search/articles', bingArticles);
app.get('/summarize', tldrSummary);
app.get('/deleteUser', deleteUser);
app.get('/searchBlueSky', searchBlueSkyPosts);
app.get('/getBlueSkyFeed', getBlueSkyFeed);

app.get('*', (req: Request, res: Response) => {

	if(req) {
		console.log("catch-all route hit")
	}

	try {
		console.log('running catch-all route')
		const filePath = path.resolve(clientDistPath, 'index.html');
		console.log("Serving:", filePath);
		res.sendFile(filePath);
	} catch (err: any) {
		if (err.code === 'ECONNRESET') {
			console.error('Connection reset by client');
			res.status(500).send('Lost Network Connection');
		}
	}
});


app.listen(PORT, () => {

	return console.log(`Express is listening at ${PORT}`);
});
