import PubSubController from './pubsub.controller';
import PubSubService from './pubsub.service';
import PubSubModel from '../../db/models/pubsub';

const PubSubRepository = new PubSubService(PubSubModel);
const pubSubModule = new PubSubController(PubSubRepository);

export default pubSubModule;