import passport from "koa-passport";
// @ts-expect-error -- No types exist
import refresh from "passport-oauth2-refresh";
import magiclogin from "./strategies/magiclogin";
import twitch from "./strategies/twitch";
import spotify from "./strategies/spotify";
import twitter from "./strategies/twitter";
import instagram from "./strategies/instagram";

// @ts-expect-error -- Custom implementation of strategy
passport.use("magiclogin", magiclogin);

passport.use("twitch", twitch);
refresh.use("twitch", twitch);

passport.use("spotify", spotify);

passport.use("twitter", twitter);
refresh.use("twitter", twitter);

passport.use("instagram", instagram);
refresh.use("instagram", instagram);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  // @ts-expect-error -- Custom implementation of strategy
  done(null, user);
});
