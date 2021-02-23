import * as express from 'express';
import PubSubService from '../../interfaces/pubsubService.interface';
import HttpException from '../../exceptions/HttpException';
import Controller from '../../interfaces/controller.interface';
import validationMiddleware from '../../middlewares/validator';
import { PublishPubSubDto, SubcribePubSubDto } from './pubsub.dto';

class PubSubController implements Controller {
    public path = '/';
    public router = express.Router();
    private pubSub;
  
    constructor(pubSubRepository: PubSubService) {
      this.pubSub = pubSubRepository;
      this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post(`/subcribe/:topic`, validationMiddleware(SubcribePubSubDto), this.subscribeToTopic);
        this.router.post(`/publish/:topic`, validationMiddleware(PublishPubSubDto), this.publishMessageToTopic);
    }

    private subscribeToTopic = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const { topic } = request.params;
            const data = await this.pubSub.subscribe(topic, request.body);
            response.status(200).json(data);
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    }

    private publishMessageToTopic = async (request: express.Request, response: express.Response, next: express.NextFunction) => {

    }
  }
  
  export default PubSubController;