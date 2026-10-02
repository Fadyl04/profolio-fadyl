import Router from 'express';
import { submitContactForm } from '../controllers/contact.controller.js';
import { contactValidationRules, validate } from '../validators/contact.validator.js';
import { contactLimiter } from '../middlewares/rateLimiter.middleware.js';

const router = Router();

router.post('/', contactLimiter, contactValidationRules, validate, submitContactForm);

export default router;