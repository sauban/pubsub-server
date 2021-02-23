require('dotenv').config();

import environmentConfig from './config/environment';
import logger from './config/winston';
import boostrapMongoose from './db/mongodb';
import server from './server';

(async () => {
  try {
    logger.log('info', 'Setting up server');
    await boostrapMongoose();
    const app = server();
    const { port } = environmentConfig();
    app.listen(port, () => logger.log('info', `app now listening on ${port}`));
  } catch (e) {
    logger.log('error', e);
    process.exit(1);
  }
})();
