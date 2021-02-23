import * as mongoose from 'mongoose';
import PubSubService from '../../interfaces/pubsubService.interface';
import { PublishPubSubDto, SubcribePubSubDto} from './pubsub.dto';

export default class PubSubRepository implements PubSubService {
    private model;
    constructor(pubSubModel: mongoose.Model<any>) {
        this.model = pubSubModel;
    }

    public subscribe = (subscriptionData: SubcribePubSubDto ) => {
        this.model.create
    }

    public publish = (publishData: PublishPubSubDto ) => {

    }

}