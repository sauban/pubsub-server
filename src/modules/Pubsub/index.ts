import PubSubController from './pubsub.controller';
import PubSubService from './pubsub.service';
import PubSubModel from '../../db/models/pubsub';

const PubSubRepository = new PubSubService(PubSubModel);
const controller = new PubSubController(PubSubRepository);

export default controller;