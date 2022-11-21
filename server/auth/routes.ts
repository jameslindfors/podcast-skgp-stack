import Router from "koa-router";
import passport from "koa-passport";

const router = new Router();

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
    failureRedirect:
      process.env["FAILURE_REDIRECT"] || "http://localhost:5173/",
  }),
  async (ctx) => {
    // TODO - eventually redirect to home page
    ctx.redirect("http://localhost:5173/");
  }
);

export default router;
