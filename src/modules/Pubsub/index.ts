import PubSubController from './controller';
import PubSubService from './service';
import PubSubModel from '../../db/models/pubsub';

const PubSubRepository = new PubSubService(PubSubModel);
const controller = new PubSubController(PubSubRepository);

export default controller;