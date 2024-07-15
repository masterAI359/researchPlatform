import express, { Request, Response } from 'express'

export const tldrSummary = async (req: Request, res: Response) => {
	const recieved = req.query.q as string
	const query:string[] = JSON.parse(decodeURIComponent(recieved))
	console.log(query)

	const url =
		'https://tldrthis.p.rapidapi.com/v1/model/extractive/summarize-url/';

		if (!Array.isArray(query) || query.length === 0) {
			return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
		}
		

	try {
		
		const dataMap = query.map(async (articleLink) => {

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'x-rapidapi-key': '3e0ff041dcmsh136e954b7ef530bp1da9d4jsn1f72dfc74936',
					'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					url: articleLink,
					num_sentences: 5,
					is_detailed: true,
				})
			})
			if(!response.ok) {
				throw new Error(`Failed to fetch Summary for ${articleLink}`)
			}
			const data = await response.json()
			console.log(data)
			return data
		})
		const results = await Promise.all(dataMap)
		res.send(results)

	} catch (error) {
		console.error("Error: " + error)
		res.status(500).send("An error occured trying to fetch articles from TLDR")
	}

};


