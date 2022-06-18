import { Feed } from '../types.ts'

let feeds: Feed[] = [
    {
        id:"1",
        name: "Feed number one",
        url: "http://url.com",
    },
    {
        id:"2",
        name: "Feed number 2",
        url: "http://url2.com",
    },
    {
        id:"3",
        name: "Feed number 3",
        url: "http://url3.com",
    }
]


// @desc    Get all feeds
// @route   GET /api/v1/feeds
const getFeeds =  ({ response }: { response: any }) => {
        response.body = {
            success: true,
            data: feeds
        }          
}

// @desc    Get single feed
// @route   GET /api/v1/feeds/:id
const getFeed =  ({ params, response }: { params: { id: string }, response: any }) => {
    const feed: Feed | undefined = feeds.find(f => f.id === params.id)

    if (feed) {
        response.status = 200
        response.body = {
            success: true,
            data: feed
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
//TODO
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