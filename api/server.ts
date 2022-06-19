import { Application } from '../deps.ts'
import router from './routes/routes.ts'

const port = Deno.env.get("PORT") || 5000

const app = new Application()

app.use(router.routes())
app.use(router.allowedMethods())

app.addEventListener("listen", ({ hostname, port, secure }) => {
    console.log(
      `Listening on: ${secure ? "https://" : "http://"}${
        hostname ??
          "localhost"
      }:${port}`,
    );
  });

console.log(`Server running on ${port}`)

await app.listen({ port: +port })