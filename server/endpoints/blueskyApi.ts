import { Request, Response } from 'express'
import decodeItem from '../helpers/decodeItem';

export const searchBlueSkyPosts = async (req: Request, res: Response) => {
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
            if(!response.ok) {
                throw new Error('Failed to connect to bluesky - ' + response.statusText);
            }

            const data = await response.json();
            const cleansedData = decodeItem(data)
            console.log(cleansedData);
            res.send(cleansedData);           

    } catch (error) {
        console.log(error)
    }

}