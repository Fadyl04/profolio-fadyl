import express from 'express';
import cors from 'cors';

import config from './config/env.js';

import contactRoutes from './routes/contact.routes.js';
import cvRoutes from './routes/cv.routes.js';

import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(cors({
  origin: config.frontendUrl
}));

app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/cv', cvRoutes);

app.use(errorHandler);

export default app;