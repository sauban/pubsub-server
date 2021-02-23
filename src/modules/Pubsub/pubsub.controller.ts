import * as express from 'express';
import PubSubService from '../../interfaces/pubsubService.interface';
import HttpException from '../../exceptions/HttpException';
import Controller from '../../interfaces/controller.interface';

class PubSubController implements Controller {
    public path = '/';
    public router = express.Router();
    private pubSub;
  
    constructor(pubSubRepository: PubSubService) {
      this.initializeRoutes();
      this.pubSub = pubSubRepository;
    }

    private initializeRoutes() {
        this.router.post(`/subcribe/:topic`, this.subscribeToTopic.bind(this));
        this.router.post(`/publish/:topic`, this.publishMessageToTopic.bind(this));
    }

    private async subscribeToTopic (request: express.Request, response: express.Response, next: express.NextFunction) {
        try {
            const { topic } = request.params;
            const data = await this.pubSub.subscribe(topic, request.body);
            response.status(200).json(data);
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    }

    private async publishMessageToTopic (request: express.Request, response: express.Response, next: express.NextFunction) {

    }
    
  }
  
  export default PubSubController;