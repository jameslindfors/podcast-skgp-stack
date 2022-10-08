import Router from "koa-router";
import passport from "koa-passport";
import { magicLogin } from "./strategies/magiclogin";

const router = new Router();

router.post("/auth/magiclogin", async (ctx) => {
  magicLogin.send(ctx.request, ctx.response);
});

router.get(
  "/auth/magiclogin/callback",
  passport.authenticate("magiclogin"),
  async (ctx) => {
    // TODO - eventually redirect to either register or home page
    ctx.redirect("http://localhost:5173");
  }
);

export default router;
