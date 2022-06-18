import { Router } from '../deps.ts'
import { getFeeds, getFeed, addFeed, updateFeed, deleteFeed } from './controllers/feeds.ts'

const router = new Router()

router.get('/api/feeds', getFeeds)
    .get('/api/feeds/:id', getFeed)
    .post('/api/feeds', addFeed)
    .put('/api/feeds/:id', updateFeed)
    .delete('/api/feeds/:id', deleteFeed)

export default router