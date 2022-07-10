/** @jsx h */

import { Handlers, PageProps } from "$fresh/server.ts";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { h } from "preact";
import { tw } from "@twind";

import Feed from "../components/Feed.tsx";

interface Folder {
    id: number;
    title: string;
    user_id: number;
}

const url = Deno.env.get("miniflux_url");
const token = Deno.env.get("miniflux_key");


export const handler: Handlers<Folder | null> = {
  async GET(_, ctx) {

    //MINIFLUX
    const resp = await fetch(`${url}/v1/categories`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': `${token}`
      },
    });
    if (resp.status === 404) {
      return ctx.render(null);
    }
    return resp;
  },
};
