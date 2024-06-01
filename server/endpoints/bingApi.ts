import express, { Request, Response } from 'express';

export const bingGeneral = async (req: Request, res: Response) => {
	//declare search string from user's input
	const search = req.query.q as string;
	const apiKey = 'ce2d91d82a8749c3a4f0eb2a64d9c77a';
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
	)}&mkt=en-us&freshness=Day&count=10&category=News&safeSearch=Strict&module=Images`;

	try {
		const response = await fetch(endpoint, {
			method: 'GET',
			headers: { 'Ocp-Apim-Subscription-Key': apiKey },
		});
		if (!response.ok) {
			throw new Error(`error: ${response.status}`);
		}
		const data = await response.json();

		const organizedData = Object.values(data.value).map((value: any) => {
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
			};
		});

		res.send(organizedData);
	} catch (err) {
		console.error('error', err);
		res.status(500).send('error fetching search result');
	}
};

// console.log('this is sort => : ', data.sort);
// console.log('this is _type => : ', data._type);
// console.log('this is _type => : ', data.readLink);
// console.log(
// 	'this is totalEstimates matches => ',
// 	data.totalEstimatedMatches
// );
// console.log('this is query context => : ', data.queryContext);
