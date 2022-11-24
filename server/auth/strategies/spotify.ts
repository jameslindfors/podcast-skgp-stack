// @ts-expect-error No type definitions for this module
import { Strategy as SpotifyStrategy } from "passport-spotify";
import { prisma } from "../../config/database";

import type { Profile } from "./types";

export const spotify = new SpotifyStrategy(
  {
    clientID: process.env["SPOTIFY_CLIENT_ID"] || "",
    clientSecret: process.env["SPOTIFY_CLIENT_SECRET"] || "",
    callbackURL: "/auth/spotify/callback",
  },
  async (
    accessToken: string,
    refreshToken: string,
    expires_in: number,
    profile: Profile,
    done: any
  ) => {
    try {
      await prisma.user.upsert({
        where: {
          profile_identifier: profile.id,
        },
        update: {
          access_token: accessToken,
          refresh_token: {
            update: {
              where: {
                profile_identifier: profile.id,
              },
              data: {
                token: refreshToken,
              },
            },
          },
        },
        create: {
          profile_identifier: profile.id,
          username: profile.displayName,
          profile_img:
            profile.photos[0] ||
            "https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=612x612&w=0&k=20&c=s0aTdmT5aU6b8ot7VKm11DeID6NctRCpB755rA1BIP0=",
          access_token: accessToken,
          refresh_token: {
            create: {
              token: refreshToken,
            },
          },
          expires: expires_in,
        },
      });
      return done(null, profile);
    } catch (err: unknown) {
      return done(err);
    }
  }
);

export default spotify;
