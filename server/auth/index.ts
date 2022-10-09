import passport from "koa-passport";
// @ts-expect-error -- No types exist
import refresh from "passport-oauth2-refresh";
import magiclogin from "./strategies/magiclogin";
import twitch from "./strategies/twitch";

// @ts-expect-error -- Custom implementation of strategy
passport.use("magiclogin", magiclogin);
passport.use("twitch", twitch);
refresh.use("twitch", twitch);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // @ts-expect-error -- Custom implementation of strategy
  done(null, user);
});
