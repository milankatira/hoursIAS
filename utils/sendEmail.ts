import nodemailer from 'nodemailer';

const transporter = (email: string | undefined, password: string | undefined) =>
  nodemailer.createTransport({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    host: process.env.host as string,
    port: process.env.mailPort,
    secureConnection: false,
    tls: {
      ciphers: 'SSLv3',
    },
    auth: {
      user: email,
      pass: password,
    },
  });

export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
  template: unknown,
  isAttachment?: string,
  attachments?: unknown,
) => {

  // eslint-disable-next-line no-useless-catch
  try {

    const emailer = await transporter(
      process.env.EMAIL,
      process.env.EMAIL_PASSWORD,
    );
    let mailOptions = {};

    if (isAttachment !== undefined) {

      mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text,
        html: template,
        attachments,
      };

    } else {

      mailOptions = {
        from: process.env.EMAIL,
        to,
        subject,
        text,
        html: template,
        icalEvent: attachments,
      };

    }

    await emailer.sendMail(mailOptions);

  } catch (error) {

    throw error;

  }

};
