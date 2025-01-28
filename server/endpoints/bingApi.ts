import { val } from 'cheerio/lib/api/attributes';
import { Request, Response } from 'express';
import decodeItem from '../helpers/decodeItem.js';
import { logoMap } from './logoMap.js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url';
const envUrl = fileURLToPath(import.meta.url)
const __dirname = path.dirname(envUrl)
const envPath = path.resolve(__dirname, '../../../.env');
dotenv.config({ path: envPath })
const BingKey = process.env.BING_KEY as string

export const bingArticles = async (req: Request, res: Response) => {
	const search = req.query.q as string;
	//const apiKey = 'ce2d91d82a8749c3a4f0eb2a64d9c77a';
	const endpoint = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(
		search
	)}+-site:msn.com&mkt=en-us&count=10&category=Articles&safeSearch=Strict&module=Images&responseFilter=News&textFormat-videos=HTML`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: { 'Ocp-Apim-Subscription-Key': BingKey },
		});
		if (!response.ok) {
			throw new Error(`error: ${res.status(500)}`)
		}
		const data = await response.json();
		const dataValues = data.value;
		const decodedData = dataValues.map((item: any) => decodeItem(item));

		const articlesWithLogos = Object.values(decodedData).map((article: any) => {
			const provider = article.provider[0].name.replace(/\s+/g, '').toLowerCase();

			if (logoMap.has(provider)) {
				article.logo = logoMap.get(provider)
			} else {
				article.logo = logoMap.get("fallback")
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
		console.error('error', err);
		res.status(500).send('error fetching search result');
	}
};


