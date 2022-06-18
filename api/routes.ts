import { Router } from 'https://deno.land/x/oak/mod.ts'
import { getfeeds, getfeed, addfeed, updatefeed, deletefeed } from './controllers/feeds.ts'

const router = new Router()

router.get('/api/v1/feeds', getfeeds)
    .get('/api/v1/feeds/:id', getfeed)
    .post('/api/v1/feeds', addfeed)
    .put('/api/v1/feeds/:id', updatefeed)
    .delete('/api/v1/feeds/:id', deletefeed)

export default router