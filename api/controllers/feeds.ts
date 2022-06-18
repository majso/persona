import { Feed } from '../types.ts'


// @desc    Get all feeds
// @route   GET /api/v1/feeds
const getfeeds = async ({ response }: { response: any }) => {
    if (!response) {
        response.status = 500
        response.body = {
            success: false,
            msg: "No Data"
        }
    } else {        
        response.body = {
        success: true,
        data: "feeds"
        }   
    }
}

// @desc    Get single feed
// @route   GET /api/v1/feeds/:id
const getfeed = async ({ params, response }: { params: { id: string }, response: any }) => {
    if (!response) {
        response.status = 404
        response.body = {
            success: false,
            msg: `No feed with the id of ${params.id}`
        }
    } else {
        response.body = {
        success: true,
        data: "feed"
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