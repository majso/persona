FROM hayd/alpine-deno:1.0.0

EXPOSE 5000

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .

USER deno
RUN deno cache ./api/server.ts
CMD ["run", "--allow-read", "--allow-net", "--unstable", "./api/server.ts"]