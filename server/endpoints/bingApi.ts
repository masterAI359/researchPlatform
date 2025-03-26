import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath })
const BingKey = process.env.BING_KEY as string
import { Request, Response } from 'express';
import decodeItem from '../helpers/decodeItem.js';
import { logoMap } from './logoMap.js'

const logoMapData = new Map(Object.entries(logoMap))

export const bingArticles = async (req: Request, res: Response) => {
	const search = req.query.q as string;
	//const apiKey = 'ce2d91d82a8749c3a4f0eb2a64d9c77a';
	const endpoint = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(
		search
	)}+-site:msn.com&mkt=en-us&count=30&category=Articles&safeSearch=Moderate&module=Images&responseFilter=News&textFormat-videos=HTML`;

	console.log(search)

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: { 'Ocp-Apim-Subscription-Key': BingKey },
		});
		if (!response.ok) {
			throw new Error(`Bing API failed with status ${res.status}: ${res.statusMessage}`);
		}
		const data = await response.json();
		const dataValues = data.value;
		const decodedData = dataValues.map((item: any) => decodeItem(item));

		const articlesWithLogos = Object.values(decodedData).map((article: any) => {
			const provider = article.provider[0].name.replace(/\s+/g, '').toLowerCase();

			if (logoMapData.has(provider)) {
				article.logo = logoMapData.get(provider)
			} else {
				article.logo = logoMapData.get("fallback")
			}
			return article
		})

		const organizedData = Object.values(articlesWithLogos).map((value: any) => {
			const stringDate = new Date(value.datePublished).toString()
			const formattedDate = stringDate.split(' ').splice(0, 4).join(' ')

			return {
				name: value.name,
				url: value.url,
				image: {
					img: value.image?.thumbnail ? value.image.thumbnail.contentUrl : null,
					width: value.image?.thumbnail ? value.image.thumbnail.width : null,
					height: value.image?.thumbnail ? value.image.thumbnail.height : null,
				},
				description: value.description,
				keywords: [
					value?.about?.map((keyword: any) => {
						return keyword.name;
					}),
				],
				provider: value.provider[0].name,
				datePublished: formattedDate,
				logo: value.logo
			};
		});
		const result = {
			date: new Date().getDate(),
			data: organizedData,
		};
		res.send(result);
	} catch (err) {
		console.error("error:", JSON.stringify(err, null, 2));
		res.status(500).send('error fetching search result');
	}
};


