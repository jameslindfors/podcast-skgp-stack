// @ts-expect-error -- Custom implementation of strategy
import TwitterStrategy from "passport-twitter-oauth2";

export const twitter = new TwitterStrategy(
  {
    clientID: process.env["TWITTER_CLIENT_ID"],
    clientSecret: process.env["TWITTER_CLIENT_SECRET"],
    callbackURL: "/auth/twitter/callback",
  },
  (
    accessToken: string,
    refreshToken: string,
    profile: unknown,
    done: unknown
  ) => {
    console.log(profile);
    // @ts-expect-error -- Unknown type
    done(null, profile);
  }
);

export default twitter;
