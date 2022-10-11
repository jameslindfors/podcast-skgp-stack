// @ts-expect-error -- Not sure why ts can't find this module
import SibApiV3Sdk from "sib-api-v3-sdk";

SibApiV3Sdk.ApiClient.instance.authentications["api-key"].apiKey =
  process.env["SENDINBLUE_API_KEY"];

interface Params<T> {
  [key: string]: T;
}

type sendEmail = {
  subject: string;
  to: string;
  templateId: number;
  params: Params<string>;
};

export const sendEmail = async ({
  subject,
  to,
  templateId,
  params,
}: sendEmail) => {
  new SibApiV3Sdk.TransactionalEmailsApi()
    .sendTransacEmail({
      subject,
      sender: { email: "api@sendinblue.com", name: "Testing Email Sender" },
      replyTo: { email: "apit@sendinblue.com", name: "No Reply" },
      to: [{ name: "John Doe", email: to }],
      templateId,
      params: {
        cb_uri: params.cb_uri,
      },
    })
    .then((data: unknown) => {
      return data;
    })
    .catch((error: unknown) => {
      return error;
    });
};

export default { sendEmail };
