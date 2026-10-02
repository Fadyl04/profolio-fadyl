import nodemailer from 'nodemailer';
import config from '../config/env.js';

const port = Number(config.mail.port);

const transporter = nodemailer.createTransport({
  host: config.mail.host,
  port,
  secure: port === 465, // true pour 465, false pour 587 (STARTTLS)
  auth: {
    user: config.mail.user,
    pass: config.mail.pass
  },
  connectionTimeout: 15000,
  greetingTimeout: 15000,
  socketTimeout: 20000
});

// Vérifie la connexion SMTP dès le démarrage du serveur
transporter.verify()
  .then(() => console.log('SMTP prêt : connexion OK'))
  .catch((err) => console.error('SMTP KO :', err.code, err.message));

export async function sendContactMail({ name, email, message }) {
  const mailOptions = {
    from: `"Portfolio - ${name}" <${config.mail.user}>`,
    replyTo: email,
    to: config.mail.to,
    subject: `Nouveau message de ${name} via le portfolio`,
    html: `
      <h3>Nouveau message depuis le formulaire de contact</h3>
      <p><strong>Nom :</strong> ${name}</p>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Message :</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `
  };

  return transporter.sendMail(mailOptions);
}