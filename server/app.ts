import { Application } from '../deps.ts'
//import models from './models/index.ts'
import router from './routes/feed.ts'

const port = Deno.env.get("PORT") || 5000,
      alpnProtocols = ["h2", "http/1.1"];

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

router.get("/", (ctx) => {
  ctx.response.body = "Hello root!";
})

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
      `Listening on: ${secure ? "https://" : "http://"}${
        hostname ??
          "localhost"
      }:${port}`,
    );
  });

console.log(`Server running on ${port}`)

await app.listen({ port: +port, alpnProtocols })