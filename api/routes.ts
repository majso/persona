import { Router } from 'https://deno.land/x/oak@v10.6.0/mod.ts'
import { getfeeds, getfeed, addfeed, updatefeed, deletefeed } from './controllers/feeds.ts'

const router = new Router()

router.get('/api/feeds', getfeeds)
    .get('/api/feeds/:id', getfeed)
    .post('/api/feeds', addfeed)
    .put('/api/feeds/:id', updatefeed)
    .delete('/api/feeds/:id', deletefeed)

export default router