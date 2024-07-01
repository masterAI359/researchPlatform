import express, { Request, Response } from 'express'

export const tldrSummary = async (req: Request, res: Response) => {
	const query = req.query.q as string;

	const url =
		'https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/';

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				//put api in a env after
				'x-rapidapi-key': '3e0ff041dcmsh136e954b7ef530bp1da9d4jsn1f72dfc74936',
				'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				url: query,
				num_sentences: 5,
				is_detailed: true,
			}),
		});
		const result = await response.text();
		res.send(result);
	} catch (error) {
		console.error(error);
	}
};
