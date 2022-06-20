import { Status, Context, helpers } from '../../deps.ts'
import db from '../db/database.ts'


// @desc    Get all feeds
// @route   GET /api/feeds
export const getFeeds =  (ctx: Context) => {
        const result = db.query("SELECT * FROM feeds")
        ctx.response.status = Status.OK
        ctx.response.body = {
            data: result
        }          
}

// @desc    Get single feed
// @route   GET /api/feeds/:id
export const getFeed = async (ctx: Context)  => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    //TODO: it is not returning properties
    const result = await db.query("SELECT * FROM feeds WHERE id = ?", [id])
    if (result) {
        ctx.response.status = Status.OK
        ctx.response.body = {
            data: result
        }
    } else {
        ctx.response.status = Status.NotFound
        ctx.response.body = {
            msg: "No feed found"
        }
    }
}

// @desc    Add feed
// @route   Post /api/feeds
export const addFeed = async (ctx: Context) => { 
        const body = await ctx.request.body();
        const feed =  await body.value;
    if (body.type === "json") {
        try {
            const _result =  db.query("INSERT INTO feeds (name, url) VALUES (?, ?)", [feed.name, feed.url])
            ctx.response.status = Status.Created
            ctx.response.body = {
                data: feed
            }
        } catch (error) {
            ctx.response.status = Status.Forbidden
            ctx.response.body = {
                msg: error.toString()
            }
        }
    } else {
        ctx.response.status = Status.NotFound
        ctx.response.body = {
            msg: "No data"
        }
    }
}

// @desc    Update feed
// @route   PUT /api/feeds/:id
export const updateFeed = (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
//TODO
}

// @desc    Delete feed
// @route   DELETE /api/feeds/:id
export const deleteFeed =  (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
//TODO
}

