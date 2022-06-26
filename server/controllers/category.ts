import { Status, Context, helpers } from '../../deps.ts'
// import { Feed } from '../models/feed.ts'
// import { Category } from '../models/category.ts'
import db from '../db/database.ts'

// TODO: try/catching all requests
// TODO: include models
// TODO: include categories

// @desc    Get all categories
// @route   GET /api/categories
export const getCategories = async (ctx: Context) => {
        const result = await db.query("SELECT * FROM categories")
        ctx.response.status = Status.OK
        ctx.response.body = {
            data: result
        }          
}

// @desc    Get single category
// @route   GET /api/categories/:id
export const getCategory = async (ctx: Context)  => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true });
    //TODO: it is not returning properties
    const result = await db.query("SELECT * FROM categories WHERE id = ?", [id])
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
// @route   Post /api/categories
export const addCategory = async (ctx: Context) => { 
        const body = await ctx.request.body();
        const category =  await body.value;
    if (body.type === "json") {
        try {
            const _result =  db.query("INSERT INTO categories (name, url) VALUES (?, ?)", [category.name, category.url])
            ctx.response.status = Status.Created
            ctx.response.body = {
                data: category
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

// @desc    Update category
// @route   PUT /api/categories/:id
export const updateCategory = (ctx: Context) => {
    const { _id } = helpers.getQuery(ctx, { mergeParams: true });
//TODO
}

// @desc    Delete category
// @route   DELETE /api/categories/:id
export const deleteCategory =  (ctx: Context) => {
    const { _id } = helpers.getQuery(ctx, { mergeParams: true });
//TODO
}

