import { Status, Context, helpers } from '../../deps.ts'
// import { Feed } from '../models/feed.ts'
// import { Category } from '../models/category.ts'
// import { Setting } from '../models/setting.ts'
import db from '../db/database.ts'

// TODO: try/catching all requests
// TODO: include models
// TODO: include categories
// TODO: include setting

// @desc    Get all articles
// @route   GET /api/articles
export const getCategories = async (ctx: Context) => {
        const result = await db.query("SELECT * FROM articles")
        ctx.response.status = Status.OK
        ctx.response.body = {
            data: result
        }          
}

// @desc    Get single article
// @route   GET /api/articles/:id
export const getCategory = async (ctx: Context)  => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    //TODO: it is not returning properties
    const result = await db.query("SELECT * FROM articles WHERE id = ?", [id])
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

// @desc    Add category
// @route   Post /api/articles
export const addCategory = async (ctx: Context) => { 
        const body = await ctx.request.body();
        const article =  await body.value;
    if (body.type === "json") {
        try {
            const _result =  db.query("INSERT INTO articles (name, url) VALUES (?, ?)", [article.name, article.url])
            ctx.response.status = Status.Created
            ctx.response.body = {
                data: article
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

// @desc    Update article
// @route   PUT /api/articles/:id
export const updateCategory = (ctx: Context) => {
    const { _id } = helpers.getQuery(ctx, { mergeParams: true });
//TODO
}

// @desc    Delete article
// @route   DELETE /api/articles/:id
export const deleteCategory =  (ctx: Context) => {
    const { _id } = helpers.getQuery(ctx, { mergeParams: true });
//TODO
}

