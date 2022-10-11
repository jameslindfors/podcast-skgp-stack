// @ts-expect-error -- No types exist
import { Strategy as TwitchStrategy } from "passport-twitch.js";
import type { TwitchProfile } from "../types";
import { prisma } from "../../config/database";

export const twitch = new TwitchStrategy(
  {
    clientID: process.env["TWITCH_CLIENT_ID"] || "test",
    clientSecret: process.env["TWITCH_CLIENT_SECRET"] || "test",
    callbackURL: "/auth/twitch/callback",
    scope: "user:read:email",
  },
  (
    _req: Request,
    accessToken: string,
    refreshToken: string,
    profile: TwitchProfile,
    next: unknown
  ) => {
    prisma.user
      .upsert({
        where: {
          email: profile.email,
        },
        update: {},
        create: {
          email: profile.email,
          username: profile.display_name,
        },
      })
      .then((user: unknown) => {
        // @ts-expect-error == TODO: Fix this
        next(undefined, user);
      })
      .catch((err: unknown) => {
        // @ts-expect-error == TODO: Fix this
        next(err);
      });
  }
);

export default twitch;
