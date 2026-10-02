import rateLimit from 'express-rate-limit';

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 tentatives max par IP sur cette fenêtre
  message: { success: false, message: 'Trop de tentatives, réessaie plus tard.' }
});