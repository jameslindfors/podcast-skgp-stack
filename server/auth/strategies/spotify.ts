// @ts-expect-error -- No types exist
import { Strategy as SpotifyStrategy } from "passport-spotify";
// import { prisma } from "../../config/database";

export const spotify = new SpotifyStrategy(
  {
    clientID: process.env["SPOTIFY_CLIENT_ID"] || "",
    clientSecret: process.env["SPOTIFY_CLIENT_SECRET"] || "",
    callbackURL:
      process.env["CALLBACK_URL"] + "auth/spotify/callback" ||
      "http://localhost:4000/auth/spotify/callback",
  },
  (
    accessToken: string,
    refreshToken: string,
    expires_in: string,
    profile: unknown,
    done: unknown
  ) => {
    console.log(profile);
    // @ts-expect-error -- Unknown type
    done(null, profile);
  }
);

export default spotify;
