import Koa from "koa";
import mount from "koa-mount";
import gqlHttp from "./graphql";
import cors from "@koa/cors";

const app = new Koa();

app.use(cors({
    origin: "*",
    allowMethods: ["GET", "POST"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
    exposeHeaders: ["Content-Length", "Date", "X-Request-Id"],
    maxAge: 5,
    credentials: true,
    keepHeadersOnError: false
}));
app.use(mount("/graphql", gqlHttp));

export default app;
