import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import session from "koa-session";
import passport from "koa-passport";

import mount from "koa-mount";
import gqlHttp from "./graphql";

import authRoutes from "./auth/routes";

const app = new Koa();

app.use(
  cors({
    origin: "*",
    allowMethods: ["GET", "POST"],
    allowHeaders: ["Content-Type", "Authorization", "Accept"],
    exposeHeaders: ["Content-Length", "Date", "X-Request-Id"],
    maxAge: 5,
    credentials: true,
    keepHeadersOnError: false,
  })
);

app.keys = ["super-secret-key"];
app.use(session({}, app));

app.use(bodyParser());

import "./auth/index";
app.use(passport.initialize());
app.use(passport.session());

app.use(mount("/graphql", gqlHttp));

app.use(authRoutes.routes());

export default app;
