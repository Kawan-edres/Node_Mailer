import nodemailer from 'nodemailer';
const host=process.env.HOST;
const port=process.env.PORT;
const email=process.env.EMAIL;
const password=process.env.EMAIL_PASS;


export const transporter = nodemailer.createTransport({
    host: host,
    port: port,
    secure: true,
    auth: {
      user:email,
      pass: password,
    },
  });

  export const mailOptions={
    to:email,
  }