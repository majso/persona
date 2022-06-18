import { Feed } from '../types.ts'

let feeds: Feed[] = [
    {
        id:"1",
        name: "Feed number one",
        description: "This is feed number one",
        url: "http://url.com",
    },
    {
        id:"2",
        name: "Feed number 2",
        description: "This is feed number 2",
        url: "http://url2.com",
    },
    {
        id:"3",
        name: "Feed number 3",
        description: "This is feed number 3",
        url: "http://url3.com",
    }
]


// @desc    Get all feeds
// @route   GET /api/v1/feeds
const getfeeds =  ({ response }: { response: any }) => {
        response.body = {
            success: true,
            data: feeds
        }          
}

// @desc    Get single feed
// @route   GET /api/v1/feeds/:id
const getfeed =  ({ params, response }: { params: { id: string }, response: any }) => {
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
const addfeed = async ({ request, response }: { request: any, response: any }) => {    
    const body = await request.body()
    const feed = body.value 

    if (!request.hasBody) {
        response.status = 400
        response.body = {
            success: false,
            msg: 'No data'
        }
    } else {

        feed.name, 
        feed.description, 
        feed.price

        response.status = 201
        response.body = {
            success: true,
            data: "feed"
        }
    }
}

// @desc    Update feed
// @route   PUT /api/v1/feeds/:id
const updatefeed = async({ params, request, response }: { params: { id: string }, request: any, response: any }) => {
    await getfeed({ params: { "id": params.id }, response })

    if(response.status === 404) {
        response.body = {
            success: false,
            msg: response.body.msg
        }
        response.status = 404
        return
    } else {
        const body =  await request.body()
        const feed = body.value

        if (!request.hasBody) {
            response.status = 400
            response.body = {
                success: false,
                msg: 'No data'
            }
        } else {
        }
    }
}

// @desc    Delete feed
// @route   DELETE /api/v1/feeds/:id
const deletefeed = async ({ params, response }: { params: { id: string }, response: any }) => {
    await getfeed({ params: { "id": params.id }, response })

    if(response.status === 404) {
        response.body = {
            success: false,
            msg: response.body.msg
        }
        response.status = 404
        return
    } else {
    }
}

export { getfeeds, getfeed, addfeed, updatefeed, deletefeed }