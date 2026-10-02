import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  frontendUrl: process.env.FRONTEND_URL,
  mail: {
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
    to: process.env.MAIL_TO
  }
};