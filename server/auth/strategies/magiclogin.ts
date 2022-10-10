import MagicLoginStrategy from "koa-passport-magic-login";
import { prisma } from "../../config/database";

import { sendEmail } from "../../services/mail";
import { mailLoginRegisterSettings } from "../../services/mail/config";

export const magicLogin = new MagicLoginStrategy({
  secret: process.env["MAGIC_LOGIN_SECRET"] || "secret",
  callbackUrl:
    process.env["CALLBACK_URL"] + "auth/magiclogin/callback" ||
    "http://localhost:4000/auth/magiclogin/callback",
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
  verify: (payload, done) => {
    prisma.user
      .upsert({
        where: {
          email: payload.destination,
        },
        update: {},
        create: {
          email: payload.destination,
          username: payload.name,
        },
      })
      .then((user: unknown) => {
        // @ts-expect-error == TODO: Fix this
        done(null, user);
      })
      .catch((err: unknown) => {
        // @ts-expect-error == TODO: Fix this
        done(err);
      });
  },
});

export default magicLogin;
