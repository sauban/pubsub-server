import * as express from 'express';
import pathNotFound from '../middlewares/path-not-found';
import PubSubModule from '../modules/Pubsub';

const router = express.Router();

router.get('/health-check', (_, res: express.Response) => {
  return res.status(200).json({
    code: 200,
    message: 'Hello there, health check OK',
  });
});

router.use(PubSubModule.router);

router.use('*', pathNotFound);

export default router;
