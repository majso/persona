import { Setting } from '../models/setting.ts'
import { Status, Context, helpers } from '../../deps.ts'

export const getSettings = async (ctx: Context) => {
  try {
    //set default values

    // TODO: make this properly 

    var categoryId = "%";
    var feedId = "%";
    var status = "unread";
    var sort = "DESC";

    const settings = await Setting.findOne({
      raw: true
    });

    //use database values, if available
    if (settings) categoryId = settings.categoryId;
    if (settings) feedId = settings.feedId;
    if (settings) status = settings.status;
    if (settings) sort = settings.sort;

    //return all query params and itemIds
    ctx.response.status = Status.OK
    ctx.response.body = {
        data: settings
    }
  } catch (error) {
    console.log(error);
    ctx.response.status = Status.NotFound
    ctx.response.body = {
        msg: error
    }}
}