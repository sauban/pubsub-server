import mongoose from 'mongoose';
import environmentConfig from '../config/environment';
import logger from '../config/winston';

const boostrapMongoose = () => new Promise((resolve, reject) => {
  const { mongodb } = environmentConfig();

  mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  mongoose.connection.once('open', () => {
    logger.log('info', 'Now connected to the database');
    resolve('success');
  });
  mongoose.connection.on('error', (err) => {
    logger.log('error', "Couldn't connect to the mongodb server");
    reject(err);
  });
});

export default boostrapMongoose;
