// import keys from './k.js';
// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import pg from 'pg';
// const { Pool } = pg;

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// const pgClient = new Pool({
// 	user: keys.pgUser,
// 	host: keys.pgHost,
// 	database: keys.pgDatabase,
// 	password: keys.pgPassword,
// 	port: keys.pgPort,
// });

// console.log(keys.pgUser);

// pgClient.on('connect', (client) => {
// 	client
// 		.query('CREATE TABLE IF NOT EXISTS values (number INT)')
// 		.catch((err) => console.log('Pg Error: ', err));
// });

// app.get('/', (req, res) => {
// 	res.send('Hi');
// });

// app.get('/users/all', async (req, res) => {
// 	try {
// 		const result = await pgClient.query('SELECT * FROM users');
// 		res.json(result.rows);
// 	} catch (err) {
// 		console.error(err);
// 		res.status(500).json({ error: 'Internal server error' });
// 	}
// });

// app.get('/values/all', async (req, res) => {
// 	const values = await pgClient.query('SELECT * FROM values');
// 	res.send(values);
// });

// app.post('/values', async (req, res) => {
// 	if (!req.body.value) res.send({ working: false });

// 	await pgClient.query('INSERT INTO values(number) VALUES($1)', [
// 		req.body.value,
// 	]);
// 	res.send({ working: true });
// });

// app.listen(5001, (err) => {
// 	console.log('Listening');
// });
