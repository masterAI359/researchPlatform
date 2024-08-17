import express, { Request, Response } from 'express'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
import decodeItem from '../helpers/decodeItem.js'
import { logoMap } from './logoMap.js'
import { hostname } from 'os'



const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../../.env');
console.log('Loading .env from:', envPath);
console.log(envPath)

dotenv.config({ path: envPath })

console.log({'TLDR Key': process.env.TLDR_KEY}) // TODO: Contacting my bank to allow payment for RapidAPI 
const TLDRKey = process.env.TLDR_KEY as string  // Need to up the limit for TLDR.This API, ran through the free 100 credits


interface QueryType {
	url: string,
	source: string,
	date: string,
	logo: string
}

export const tldrSummary = async (req: Request, res: Response) => {
	const recieved = req.query.q as string
	const query:QueryType[] = JSON.parse(decodeURIComponent(recieved))

	const url =
		'https://tldrthis.p.rapidapi.com/v1/model/abstractive/summarize-url/';

		if (!Array.isArray(query) || query.length === 0) {
			return res.status(400).send('Invalid query parameter. Please provide a list of URLs.');
		}
		
	try {
		
		const dataMap = query.map(async (article) => {

				console.log({"fetching data for: ": article.url})

			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'x-rapidapi-key': TLDRKey,
					'x-rapidapi-host': 'tldrthis.p.rapidapi.com',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					url: article.url,
					num_sentences: 5,
					is_detailed: true,                                   
				})
			})
			if(!response.ok) {
				throw new Error(`Failed to fetch Summary for ${article.url}`)
			}
			const data = await response.json()
			data.logo = article.logo
			data.source = article.source
			data.date = article.date
			return data
		})
		const results = await Promise.allSettled(dataMap)  // [{status: 'successful / failed', value: {...}}, {status: 'successful / failed', value: {...}}, {status: 'successful / failed', value: {...}}]
		const resultsMap = results.filter((result: any) => result.status === 'fulfilled').map((result: any) => result.value)
		const resultsDecoded = decodeItem(resultsMap)
		res.send(resultsDecoded)
	} catch (error) {
		console.error("Error: " + error)
		res.status(500).send("An error occured trying to fetch articles from TLDR")
	}

};


