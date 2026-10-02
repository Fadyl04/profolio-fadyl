import { body, validationResult } from 'express-validator';

export const contactValidationRules = [
  body('name').trim().notEmpty().withMessage('Le nom est requis').isLength({ max: 100 }),
  body('email').trim().isEmail().withMessage('Email invalide'),
  body('message').trim().notEmpty().withMessage('Le message est requis').isLength({ max: 2000 })
];

export function validate(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
}