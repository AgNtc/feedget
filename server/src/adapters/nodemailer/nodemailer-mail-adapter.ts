import nodemailer from "nodemailer";
import { MailAdapter, SendmailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "18a9654d76e38c",
    pass: "908b0f4a1c9115",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async send({subject, body}: SendmailData) {
    await transport.sendMail({
      from: "Ag Feedget <oi@feedget.com>",
      to: "Ag <aguido.rx@gmail.com>",
      subject,
      html:body,
    });
  }
}
