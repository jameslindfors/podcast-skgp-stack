import MagicLoginStrategy from "koa-passport-magic-login";
import { prisma } from "../../config/database";

import { sendEmail } from "../../services/mail";
import { mailLoginRegisterSettings } from "../../services/mail/config";

export const magicLogin = new MagicLoginStrategy({
  secret: process.env.MAGIC_LOGIN_SECRET || "secret",
  callbackUrl: "/auth/magiclogin/callback",
  sendMagicLink: async (destination, href) => {
    await sendEmail({
      subject: mailLoginRegisterSettings.subject,
      to: destination,
      templateId: mailLoginRegisterSettings.templateId,
      params: { cb_uri: href },
    }).then((data: unknown) => {
      return data;
    });
  },
  verify: (payload, callback) => {
    prisma.user
      .upsert({
        where: {
          email: payload.destination,
        },
        update: {},
        create: {
          email: payload.destination,
          username: payload.name,
          hashed_pw: "test123",
        },
      })
      .then((user: unknown) => {
        // @ts-expect-error == TODO: Fix this
        callback(undefined, user);
      })
      .catch((err: unknown) => {
        // @ts-expect-error == TODO: Fix this
        callback(err);
      });
  },
});

export default magicLogin;
