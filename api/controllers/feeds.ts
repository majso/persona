import { Feed } from '../types/types.ts'
import db from '../db/database.ts'


// @desc    Get all feeds
// @route   GET /api/v1/feeds
const getFeeds =  ({ response }: { response: any }) => {
        const result = db.query("SELECT * FROM feeds")
        response.body = {
            success: true,
            data: result
        }          
}

// @desc    Get single feed
// @route   GET /api/v1/feeds/:id
const getFeed =  ({ params, response }: { params: { id: string }, response: any }) => {
   // const feed: Feed | undefined = feeds.find(f => f.id === params.id)
    const result = db.query("SELECT id FROM feeds where id = ?", [params.id])
    if (result) {
        response.status = 200
        response.body = {
            success: true,
            data: result
        }
    } else {
        response.status = 404
        response.body = {
            success: false,
            msg: "No feed found"
        }
    }
}

// @desc    Add feed
// @route   Post /api/v1/feeds
const addFeed = async ({ request, response }: { request: any, response: any }) => {    
    const body = await request.body()
    const feed = body.value 

    if (request.hasBody) {
        try {
            const _result = db.query("INSERT INTO feeds (name, url) VALUES (?, ?)", [feed.name, feed.url])
            response.status = 201
            response.body = {
                success: true,
                data: feed
            }
        } catch (error) {
            response.status = 500
            response.body = {
                success: false,
                msg: error.toString()
            }
        }

    } else {
        response.status = 400
        response.body = {
            success: false,
            msg: "No data"
        }
    }
}

// @desc    Update feed
// @route   PUT /api/v1/feeds/:id
const updateFeed = async({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
    await getFeed({ params: { "id": params.id }, response })
//TODO
}


// @desc    Delete feed
// @route   DELETE /api/v1/feeds/:id
const deleteFeed = async ({ params, response }: { params: { id: string }, response: any }) => {
    await getFeed({ params: { "id": params.id }, response })
//TODO
}

export { getFeeds, getFeed, addFeed, updateFeed, deleteFeed }