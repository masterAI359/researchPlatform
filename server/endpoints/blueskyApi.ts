import { Request, Response } from 'express'
import decodeItem from '../helpers/decodeItem.js';

export const searchBlueSkyPosts = async (req: Request, res: Response) => {
    console.log("endpoint hit");
    const received = req.query.q as string;
    const query = decodeURIComponent(received);

    const url = `https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts?q=${query}`;
    const options = {
    method: "GET",
    headers: {
        'Accept': 'application/json'
    }
}

    try {
            const response = await fetch(url, options);
            console.log('fetching')
            if(!response.ok) {
                console.log(response.status + `refused: - ${response.statusText}`)
              return res.status(response.status).send('Connection refused: ' + response.statusText)
            }

            const data = await response.json();
            if(!data) {
                return null;
            }
            const cleansedData = decodeItem(data)
            console.log(cleansedData);
            res.send(cleansedData);           

    } catch (error) {
        console.log(error)
    }

}