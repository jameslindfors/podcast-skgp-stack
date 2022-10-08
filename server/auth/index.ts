import passport from "koa-passport";
import magiclogin from "./strategies/magiclogin";

// @ts-expect-error -- Custom implementation of strategy
passport.use("magiclogin", magiclogin);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // @ts-expect-error -- Custom implementation of strategy
  done(null, user);
});
