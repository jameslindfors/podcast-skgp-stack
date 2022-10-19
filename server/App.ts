import Koa from "koa";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import cookie from "koa-cookie";
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

app.keys = [process.env["API_SECRET"] || "test"];
app.use(session({}, app));

app.use(bodyParser());
app.use(cookie());

import "./auth/index";
app.use(passport.initialize());
app.use(passport.session());

app.use(authRoutes.routes());

app.use(async (ctx, next) => {
  // if (ctx.isAuthenticated()) {
  mount("/graphql", gqlHttp);
  await next();
  // } else {
  // ctx.throw(401, "Unauthorized");
  // }
});

app.use(async (ctx) => {
  ctx.body = `
    <html>
      <body>
        <h1>API is running</h1>
        <p>Authenticated: ${ctx.isAuthenticated()}</p>
        <p>Status: ${ctx.status}</p>
      </body>
    </html>
  `;
});

export default app;
