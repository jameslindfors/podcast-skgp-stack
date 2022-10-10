import Router from "koa-router";
import passport from "koa-passport";

const router = new Router();

// MAGIC LOGIN
import { magicLogin } from "./strategies/magiclogin";

router.post("/auth/magiclogin", async (ctx) => {
  magicLogin.send(ctx.request, ctx.response);
});

router.get(
  "/auth/magiclogin/callback",
  passport.authenticate("magiclogin"),
  async (ctx) => {
    // TODO - eventually redirect to either register or home page
    ctx.redirect("http://localhost:5173/");
  }
);

// TWITCH
router.get("/auth/twitch", passport.authenticate("twitch"));

router.get(
  "/auth/twitch/callback",
  passport.authenticate("twitch", {
    failureRedirect: "http://localhost:5173/",
  }),
  async (ctx) => {
    // TODO - eventually redirect to either register or home page
    ctx.redirect("http://localhost:5173/");
  }
);

// SPOTIFY
router.get(
  "/auth/spotify",
  passport.authenticate("spotify", {
    scope: ["user-read-email"],
    showDialog: true,
  })
);

router.get(
  "/auth/spotify/callback",
  passport.authenticate("spotify", {
    failureRedirect: "http://localhost:5173/",
  }),
  async (ctx) => {
    // TODO - eventually redirect to either register or home page
    ctx.redirect("http://localhost:5173/");
  }
);

// ! TWITTER -- DOES NOT WORK
// router.get("/auth/twitter", passport.authenticate("twitter"));

// router.get(
//   "/auth/twitter/callback",
//   passport.authenticate("twitter", {
//     failureRedirect: "http://localhost:5173/",
//   }),
//   async (ctx) => {
//     // Successful authentication, redirect home.
//     ctx.redirect("http://localhost:5173/");
//   }
// );

router.get("/auth/instagram", passport.authenticate("instagram"));

router.get(
  "/auth/instagram/callback",
  passport.authenticate("instagram", {
    failureRedirect: "http://localhost:5173/",
  }),
  async (ctx) => {
    // TODO - eventually redirect to either register or home page
    ctx.redirect("http://localhost:5173/");
  }
);

export default router;
