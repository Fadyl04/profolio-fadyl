import dotenv from 'dotenv';
dotenv.config();

import app from './app.js'
import config from './config/env.js';

app.listen(config.port, () => {
  console.log(`Serveur backend démarré sur http://localhost:${config.port}`);
});