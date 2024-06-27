import { val } from 'cheerio/lib/api/attributes';
import express, { Request, Response } from 'express';
import he from 'he'; //ran --save-dev @types/he... may need to change this to regular dependency instead of dev dependancy
import {logoMap} from './logoMap.js'
//import fetch from 'node-fetch';
//import cheerio from 'cheerio';

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


export const bingArticles = async (req: Request, res: Response) => {
	const search = req.query.q as string;
	const apiKey = 'ce2d91d82a8749c3a4f0eb2a64d9c77a';
	const endpoint = `https://api.bing.microsoft.com/v7.0/news/search?q=${encodeURIComponent(
		search
	)}+-site:msn.com&mkt=en-us&freshness=Day&count=10&category=Articles&safeSearch=Strict&module=Images&responsiveFilter=News&textFormat=HTML`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: { 'Ocp-Apim-Subscription-Key': apiKey },
		});
		if (!response.ok) {
			throw new Error(`error: ${res.status}`);
		}
		const data = await response.json();

	const dataValues = data.value;

	

	function decodeItem (item: any) {
		if (item == undefined || item == null) {
			return item;
		}
		if (Array.isArray(item)) {
			const decodedItem: any = item.map((element: any) => {
			return decodeItem(element);
				
			})
			return decodedItem;
		} else if(typeof item === "object") {
			const decodedItem = Object.entries(item).reduce((acc: any, [key, value]) => {
		
				acc[key] = decodeItem(value);
				return acc;
			} , {})
			return decodedItem;
		} else if (typeof item === "string") {
			const decodedItem = he.decode(item);
			return decodedItem;
		}
	}

	const decodedData = dataValues.map((item: any) => decodeItem(item));


	const articlesWithLogos = Object.values(decodedData).map((article: any) => {

		const provider = article.provider[0].name.replace(/\s+/g, '').toLowerCase(); 


		if(logoMap.has(provider)) {
			article.logo = logoMap.get(provider)
		} else {
			article.logo = logoMap.get("fallback")
		}

		return article
	})

		const organizedData = Object.values(articlesWithLogos).map((value: any) => {

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
				datePublished: value.datePublished,
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

//might need seperate endpoint file for tldr

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
