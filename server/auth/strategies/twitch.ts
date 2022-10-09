import { Request } from "koa";
// @ts-expect-error -- No types exist
import TwitchStrategy from "passport-twitch.js";
const twitchStrategy = TwitchStrategy.Strategy;

import { prisma } from "../../config/database";

type TwitchProfile = {
  id: string;
  login: string;
  display_name: string;
  type: string;
  broadcaster_type: string;
  description: string;
  profile_image_url: string;
  offline_image_url: string;
  view_count: number;
  email: string;
  created_at: string;
  provider: string;
};

export const twitch = new twitchStrategy(
  {
    clientID: process.env.TWITCH_CLIENT_ID || "test",
    clientSecret: process.env.TWITCH_CLIENT_SECRET || "test",
    callbackURL: "/auth/twitch/callback",
    scope: "user:read:email",
  },
  function (
    _req: Request,
    accessToken: string,
    refreshToken: string,
    profile: TwitchProfile,
    next: unknown
  ) {
    prisma.user
      .upsert({
        where: {
          email: profile.email,
        },
        update: {},
        create: {
          email: profile.email,
          username: profile.display_name,
          hashed_pw: "test123",
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
