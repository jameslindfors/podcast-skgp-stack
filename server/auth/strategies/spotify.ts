// @ts-expect-error -- No types exist
import SpotifyStrategy from "passport-spotify";
const spotifyStrategy = SpotifyStrategy.Strategy;
// import { prisma } from "../../config/database";

export const spotify = new spotifyStrategy(
  {
    clientID: process.env.SPOTIFY_CLIENT_ID || "",
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET || "",
    callbackURL: "/auth/spotify/callback",
  },
  function (
    accessToken: string,
    refreshToken: string,
    expires_in: string,
    profile: unknown,
    done: unknown
  ) {
    console.log(profile);
    // @ts-expect-error -- Unknown type
    done(null, profile);
  }
);

export default spotify;
