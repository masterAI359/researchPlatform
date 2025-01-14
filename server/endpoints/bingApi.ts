import { val } from 'cheerio/lib/api/attributes';
import express, { Request, Response } from 'express';
import decodeItem from '../helpers/decodeItem.js';
import { logoMap } from './logoMap.js'
//import fetch from 'node-fetch';
//import cheerio from 'cheerio';

//CONSIDERATION: DiffBot API might be a better alternative, it seems to have a much lower failure rate than TLDRThis api

//TODO: We should refine the bingArticles search to only return print media, and ensure that we're returning bigger image sizes


export const bingGeneral = async (req: Request, res: Response) => {
	//declare search string from user's input
	const search = req.query.q as string;
	const apiKey = 'fe13aa45a7654f10b3f81e30f5e0b5ab';
	//declare endpoint with the search
	const endpoint = `https://api.bing.microsoft.com/v7.0/search?q=${encodeURIComponent(
		search
	)}&mkt=en-us`;
	console.log('test123');

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
};

//Do we even need the bingGeneral Search?


export const bingArticles = async (req: Request, res: Response) => {
	const search = req.query.q as string;
	const apiKey = 'ce2d91d82a8749c3a4f0eb2a64d9c77a';
	const endpoint = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(
		search
	)}+-site:msn.com&mkt=en-us&count=20&category=Articles&safeSearch=Strict&module=Images&responseFilter=News&textFormat-videos=HTML`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: { 'Ocp-Apim-Subscription-Key': apiKey },
		});
		if (!response.ok) {
			throw new Error(`error: ${res.status}`);
		}
		const data = await response.json();

		const dataValues = data.value; //JSON we want was stored in 'value' property

		const decodedData = dataValues.map((item: any) => decodeItem(item));

		const articlesWithLogos = Object.values(decodedData).map((article: any) => { //adding SVG of provider logos
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


