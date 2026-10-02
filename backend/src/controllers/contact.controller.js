import { sendContactMail } from '../services/mail.service.js';

export async function submitContactForm(req, res, next) {
  try {
    const { name, email, message } = req.body;
    await sendContactMail({ name, email, message });
    res.status(200).json({ success: true, message: 'Message envoyé avec succès.' });
  } catch (error) {
    next(error); // remonte au middleware d'erreur centralisé
  }
}