import express, { Request, Response } from 'express';
const app = express();
import keys from './keys';
import fetch from 'node-fetch';

const password =
	keys.pgPassword !== undefined ? keys.pgPassword.toString() : undefined;

import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
	user: keys.pgUser,
	password: keys.pgPassword,
	host: keys.pgHost,
	port: keys.pgPort !== undefined ? parseInt(keys.pgPort, 10) : undefined,
	database: keys.pgDatabase,
});

client
	.connect()
	.then(() => console.log('Connected to the Elenchus Database'))
	.catch((err: Error) => console.error('Error connecting to database: ', err));

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
app.get('/search', async (req: Request, res: Response) => {
	//declare search string from user's input
	const search = req.query.q as string;
	const apiKey = 'fe13aa45a7654f10b3f81e30f5e0b5ab';
	//declare endpoint with the search
	const endpoint = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(
		search
	)}&mkt=en-us`;

	try {
		const response = await fetch(endpoint, {
			//https request to get the search's response
			method: 'GET',
			headers: { 'Ocp-Apim-Subscription-Key': apiKey },
		});
		if (!response.ok) {
			throw new Error(`error: ${res.status}`);
		}
		const data = await response.json();
		res.send(data);
	} catch (err) {
		console.error('error', err);
		res.status(500).send('error fetching search result');
	}
});

app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
