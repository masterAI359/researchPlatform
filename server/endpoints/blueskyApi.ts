import { BLUESKY_EMAIL, BLUESKY_PASSWORD } from '../src/Config.js';
import { Request, Response as ExpRes } from 'express'
import decodeItem from '../helpers/decodeItem.js';
import { AtpAgent, AtpSessionData } from '@atproto/api';



//class MyAgent extends Agent {
//    private accessToken?: string
//}
//
//const agent = new AtpAgent({
//    service: 'https://bsky.social',
//    persistSession: (evt, session) => {
//     session?.accessJwt
//    }
//});
//
//
//
//export const searchBlueSkyPosts = async (req: Request, res: Response) => {
//    console.log("endpoint hit");
//    const received = req.query.q as string;
//    const query = decodeURIComponent(received);
//    const url = `https://public.api.bsky.app/xrpc/app.bsky.feed.searchPosts?q=${query}`;
//    const options: any = {
//        method: "GET",
//        headers: {
//            'Accept': 'application/json',
//            'Authorization' : `Bearer ${bearer}`
//        }
//}
//
//    try {
//        const loggedIn = await agent.login({
//            identifier: BLUESKY_EMAIL,
//            password: BLUESKY_PASSWORD
//        });
//
//        if(loggedIn) {
//            try {
//
//              
//                
//                
//                const response = await fetch(url, options);
//                console.log('fetching')
//                if(!response.ok) {
//                    console.log(response.status + `refused: - ${response.statusText}`)
//                  return res.status(response.status).send('Connection refused: ' + response.statusText)
//                }
//    
//                const data = await response.json();
//                if(!data) {
//                    return null;
//                }
//                const cleansedData = decodeItem(data)
//                console.log(cleansedData);
//                res.send(cleansedData);           
//    
//        } catch (error) {
//            console.log(error);
//        }
//        }
//
//    } catch (error) {
//        console.log(error);
//    }
//
//   
//
//}

const agent = new AtpAgent({ service: 'https://bsky.social' })

export const searchBlueSkyPosts = async (req: Request, res: ExpRes) => {
  const query = String(req.query.q ?? '')

  try {
    const { data: session} = await agent.login({
      identifier: BLUESKY_EMAIL,
      password:   BLUESKY_PASSWORD,
      
    })
    const jwt  = session.accessJwt

    const result = await agent.api.app.bsky.feed.searchPosts(
      { q: query },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    )

    const cleansed = decodeItem(result.data)
    
    return res.json(cleansed)

  } catch (err: any) {
    console.error('Bluesky error:', err)

    const status = err.status || err.statusCode || 500
    const message = err.message || 'Unexpected error'
    return res.status(status).send(message)
  }
}

export const getBlueSkyFeed = async (res: ExpRes) => {


    try {
          const { data: session } = await agent.login({
            identifier: BLUESKY_EMAIL,
            password: BLUESKY_PASSWORD
          });

          const jwt = session.accessJwt;

          const feedResult = await agent.api.app.bsky.feed.getFeed(
           {feed: `at://did:plc:kkf4naxqmweop7dv4l2iqqf5/app.bsky.feed.generator/verified-news`, limit: 20},
           { headers: { authorization: `Bearer ${jwt}` }}
           
          );

        
          const decodedFeed = decodeItem(feedResult.data);

         return res.json(decodedFeed)


    } catch(error: any) {
      console.error('BlueSky error: ' + error);
      const status = error.status || error.statusCode || 500;
      const message = error.message || 'Unexpected Error'
      return res.status(status).send(message);
    }
}