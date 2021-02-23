import * as express from 'express';
import PubSubService from '../../interfaces/pubsubService.interface';
import HttpException from '../../exceptions/HttpException';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middlewares/validator';
import { PublishPubSubDto, SubcribePubSubDto } from './pubsub.dto';
import logger from '../../config/winston';

class PubSubController implements Controller {
    public path = '/';
    public router = express.Router();
    private pubSub: PubSubService;
  
    constructor(pubSubRepository: PubSubService) {
      this.pubSub = pubSubRepository;
      this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`/subscribe/:topic`, validationMiddleware(SubcribePubSubDto), this.subscribeToTopic);
        this.router.post(`/publish/:topic`, validationMiddleware(PublishPubSubDto), this.publishMessageToTopic);
    }

    private subscribeToTopic = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const params: SubcribePubSubDto = { ...request.params, ...request.body };
            const result = await this.pubSub.subscribe(params);
            response.status(200).json(result.data);
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    }

    private publishMessageToTopic = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const params: PublishPubSubDto = { ...request.params, ...request.body };
            const data = await this.pubSub.publish(params);
            response.status(200).json(data);
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    }
  }
  
  export default PubSubController;