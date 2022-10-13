// @ts-expect-error -- No types exist
import { Strategy as InstagramStrategy } from "passport-instagram-basic-api";

export const instagram = new InstagramStrategy(
  {
    clientID: process.env["INSTAGRAM_CLIENT_ID"],
    clientSecret: process.env["INSTAGRAM_CLIENT_SECRET"],
    callbackURL:
     "https://api.project-water-circuit.live/auth/instagram/callback",
  },
  async (
    accessToken: string,
    refreshToken: string,
    profile: unknown,
    done: unknown
  ) => {
    // @ts-expect-error -- Unknown type
    done(null, profile);
  }
);

export default instagram;
