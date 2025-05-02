import { BLUESKY_EMAIL, BLUESKY_PASSWORD } from '../src/Config.js';
import { Request, Response as ExpRes } from 'express'
import decodeItem from '../helpers/decodeItem.js';
import { AtpAgent } from '@atproto/api';
import { unwrapObjects } from '../helpers/unwrapObjects.js';

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



export const getBlueSkyFeed = async (req: Request, res: ExpRes) => {
 
  try {
    console.log('try suggested feeds')
    await agent.login({
      identifier: BLUESKY_EMAIL,
      password:   BLUESKY_PASSWORD,
    })
    
    const suggested = await agent.api.app.bsky.feed.getSuggestedFeeds({})
    console.log('suggested feeds: ' + suggested.data.feeds)
    const gens = suggested.data.feeds
    const feedUri = gens.find(g => g.uri.includes('verified-news'))?.uri
    if (!feedUri) {
      return res.status(404).send('Couldn’t find verified-news generator')
    }
    const feed = await agent.api.app.bsky.feed.getFeed({
      feed:  feedUri,
      limit: 20,
    })
    
    const feedData = decodeItem(feed.data.feed);
    const unwrappedPosts = unwrapObjects(feedData);
    console.log({ "FeedData": unwrappedPosts }, { "Length": unwrappedPosts.length })
    return res.json(unwrappedPosts);
    
  } catch (err: any) {
    console.error('BlueSky error:', err)
    return res
      .status(err.status || err.statusCode || 500)
      .send(err.message || 'Unexpected Error')
  }
}