import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import ErrorHandler from '../middlewares/error-handler';
import routes from './routes';
import { LoggerStream } from '../config/winston';

const server = () => {
  const app = express();

  app.disable('x-powered-by');
  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(morgan('combined', { stream: new LoggerStream() }));

  app.use('/', routes);

  app.use(ErrorHandler);

  return app;
};

export default server;
