import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();
import fetch from 'node-fetch';
import { bingArticles, bingGeneral } from '../endpoints/bingApi';
import pkg from 'pg';

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

//const corsOptions: object = {
//		origin: 'http://localhost:5173'
//}

// app.use(cors(corsOptions))

 const { Client } = pkg;
 const client = new Client(
 	'postgresql://said:LWK2SWytsTGJFYIyWHBP3Q@cluster0-14450.7tt.aws-us-east-1.cockroachlabs.cloud:26257/elenchus?sslmode=verify-full'
 )
client
	.connect()
	.then(() => console.log('Connected to the Elenchus Database'))
	.catch((err: Error) => console.error('Error connecting to database: ', err));

(async () => {
	try {
		const results = await client.query('SELECT NOW()');
	} catch (err) {
		console.error('error executing query:', err);
	}
})();

const port = 5001;

app.get('/', (req: Request, res: Response) => {
	res.send('Hello World');
});

app.get('/api', async (req: Request, res: Response) => {
	try {
		const queryResult = await client.query('SELECT NOW() as current_time;');
		const currentTime = queryResult.rows[0].current_time;
		res.send(`Current Time: ${currentTime}`);
	} catch (err: any) {
		console.error('Error executing query', err.stack);
		res.status(500).send('Error executing query');
	}
});

//testing bing api search
app.get('/search', bingGeneral);
app.get('/search/articles', bingArticles);
// app.get('/search/images', bingImages);

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});

console.log("test")
console.log("log")