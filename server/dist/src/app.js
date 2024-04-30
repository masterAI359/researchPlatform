var __awaiter =
	(this && this.__awaiter) ||
	function (thisArg, _arguments, P, generator) {
		function adopt(value) {
			return value instanceof P
				? value
				: new P(function (resolve) {
						resolve(value);
				  });
		}
		return new (P || (P = Promise))(function (resolve, reject) {
			function fulfilled(value) {
				try {
					step(generator.next(value));
				} catch (e) {
					reject(e);
				}
			}
			function rejected(value) {
				try {
					step(generator['throw'](value));
				} catch (e) {
					reject(e);
				}
			}
			function step(result) {
				result.done
					? resolve(result.value)
					: adopt(result.value).then(fulfilled, rejected);
			}
			step((generator = generator.apply(thisArg, _arguments || [])).next());
		});
	};
import express from 'express';
const app = express();
import keys from './keys.js';
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
	.catch((err) => console.error('Error connecting to database: ', err));
const port = 5001;
app.get('/', (req, res) => {
	res.send('Hello World');
});
app.get('/api', (req, res) =>
	__awaiter(void 0, void 0, void 0, function* () {
		try {
			const queryResult = yield client.query('SELECT NOW() as current_time;');
			const currentTime = queryResult.rows[0].current_time;
			res.send(`Current Time: ${currentTime}`);
		} catch (err) {
			console.error('Error executing query', err.stack);
			res.status(500).send('Error executing query');
		}
	})
);
//testing bing api search
app.get('/search', (req, res) =>
	__awaiter(void 0, void 0, void 0, function* () {
		//declare search string from user's input
		const search = req.query.q;
		const apiKey = 'fe13aa45a7654f10b3f81e30f5e0b5ab';
		//declare endpoint with the search
		const endpoint = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(
			search
		)}&mkt=en-us`;
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
		} catch (err) {
			console.error('error', err);
			res.status(500).send('error fetching search result');
		}
	})
);
app.listen(port, () => {
	return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map
