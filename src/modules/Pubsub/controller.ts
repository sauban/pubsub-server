import * as express from 'express';
import HttpException from '../../exceptions/HttpException';
import Controller from '../../interfaces/controller.interface';

class PubSubController implements Controller {
    public path = '/';
    public router = express.Router();
    private pubSub;
  
    constructor(pubSubRepository: any) {
      this.initializeRoutes();
      this.pubSub = pubSubRepository;
    }

    private initializeRoutes() {
        this.router.post(`/subcribe/:topic`, this.subscribeToTopic);
        this.router.post(`/publish/:topic`, this.publishMessageToTopic);
    }

    subscribeToTopic = async (request: express.Request, response: express.Response, next: express.NextFunction) => {
        try {
            const { topic } = request.params;
            const data = await this.pubSub.subscribeToTopic(topic, request.body);
            response.status(200).json(data);
        } catch (error) {
            next(new HttpException(400, error.message));
        }
    }

    publishMessageToTopic = (request: express.Request, response: express.Response, next: express.NextFunction) => {

    }
    
  }
  
  export default PubSubController;