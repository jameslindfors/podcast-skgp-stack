import passport from "koa-passport";
import spotify from "./strategies/spotify";

passport.use("spotify", spotify);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // @ts-expect-error -- Custom implementation of strategy
  done(null, user);
});
