import { BLUESKY_EMAIL, BLUESKY_PASSWORD } from '../src/Config.js';
import decodeItem from '../helpers/decodeItem.js';
import { AtpAgent } from '@atproto/api';
import { unwrapObjects } from '../helpers/unwrapObjects.js';
const agent = new AtpAgent({ service: 'https://bsky.social' });
export const searchBlueSkyPosts = async (req, res) => {
    const query = req.query.q;
    try {
        const { data: session } = await agent.login({
            identifier: BLUESKY_EMAIL,
            password: BLUESKY_PASSWORD,
        });
        const jwt = session.accessJwt;
        const result = await agent.api.app.bsky.feed.searchPosts({ q: query }, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        });
        const cleansed = decodeItem(result.data);
        res.json(cleansed);
        return;
    }
    catch (err) {
        console.error('Bluesky error:', err);
        const status = err.status || err.statusCode || 500;
        const message = err.message || 'Unexpected error';
        res.status(status).send(message);
        return;
    }
};
export const getBlueSkyFeed = async (req, res) => {
    try {
        console.log('try suggested feeds');
        await agent.login({
            identifier: BLUESKY_EMAIL,
            password: BLUESKY_PASSWORD,
        });
        const suggested = await agent.api.app.bsky.feed.getSuggestedFeeds({});
        //console.log('suggested feeds: ' + suggested.data.feeds)
        const gens = suggested.data.feeds;
        const feedUri = gens.find(g => g.uri.includes('verified-news'))?.uri;
        if (!feedUri) {
            res.status(404).send('Couldn’t find verified-news generator');
            return;
        }
        ;
        const feed = await agent.api.app.bsky.feed.getFeed({
            feed: feedUri,
            limit: 20,
        });
        const feedData = decodeItem(feed.data.feed);
        const unwrappedPosts = unwrapObjects(feedData);
        res.json(unwrappedPosts);
    }
    catch (err) {
        console.error('BlueSky error:', err);
        res.status(err.status || err.statusCode || 500).send(err.message || 'Unexpected Error');
        return;
    }
    ;
};
//# sourceMappingURL=blueskyApi.js.map