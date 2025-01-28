import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import mongoose from 'mongoose';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uri = "mongodb+srv://trentirvin51:jz6YjyoVl7WUEfOU@cluster1.h1wpm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
const mongoClientOptions: any = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const app = express();
import {
	bingArticles,
} from '../endpoints/bingApi.js';
import { tldrSummary } from '../endpoints/tldrSummary.js'
import pkg from 'pg';


dotenv.config({ path: '../../.env' })

const corsOptions: object = {
	origin: '*',
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

app.use(express.static(path.join(__dirname, 'dist')));
console.log("Serving: " + path.join(__dirname, '../../../client/dist', 'index.html'))

app.options('*', (req, res) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
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

async function run() {
	try {
		// Create a Mongoose client with a MongoClientOptions object to set the Stable API version
		await mongoose.connect(uri, mongoClientOptions);
		await mongoose.connection.db!.admin().command({ ping: 1 });
		console.log("Pinged your deployment. You successfully connected to MongoDB!");
		if (mongoose.connection.readyState !== 1) {
			throw new Error(`Mongoose not connecting. Current readyState: ${mongoose.connection.readyState}`)
		}

	} finally {
		// Ensures that the client will close when you finish/error
		await mongoose.disconnect();
	}
}
run().catch(console.dir);

const { Client } = pkg;
const client = new Client(
	'postgresql://said:LWK2SWytsTGJFYIyWHBP3Q@cluster0-14450.7tt.aws-us-east-1.cockroachlabs.cloud:26257/elenchus?sslmode=verify-full'
);
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

//app.get('/', (req: Request, res: Response) => {
//	res.send('Hello World');
//});




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

app.get('/search/articles', bingArticles);
app.get('/summarize', tldrSummary);

// handling unkown routes, allowing client side routing on refresh with react-router-dom library
app.get('*', (req: Request, res: Response) => {
	try {
		console.log("Serving: " + path.join(__dirname, 'dist', 'index.html'))
		res.sendFile(path.join(__dirname, 'dist', 'index.html'))

	} catch (err: any) {
		if (err.code === 'ECONNRESET') {
			console.error('Connection reset by client')
			res.status(500).send('Lost Network Connection')
		}
	}

})


app.listen(port, () => {

	return console.log(`Express is listening at http://localhost:${port}`);
});
