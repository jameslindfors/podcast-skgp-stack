import Koa from "koa";
import mount from "koa-mount";
import gqlHttp from "./graphql";

const app = new Koa();

app.use(mount("/graphql", gqlHttp));

export default app;
