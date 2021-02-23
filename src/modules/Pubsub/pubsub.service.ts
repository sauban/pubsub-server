import fetch from 'node-fetch';
import * as mongoose from 'mongoose';
import PubSubService from '../../interfaces/pubsubService.interface';
import { PublishPubSubDto, SubcribePubSubDto} from './pubsub.dto';

export default class PubSubRepository implements PubSubService {
    private model: mongoose.Model<any>;
    constructor(pubSubModel: mongoose.Model<any>) {
        this.model = pubSubModel;
    }

    public subscribe = async (subscriptionData: SubcribePubSubDto ) => {
        try {
            const { topic, url } = subscriptionData;
            const subscriber = await this.model.findOne({
                topic,
                url
            });
            if (!subscriber) {
                await this.model.create(subscriptionData);
            }
            return {
                message: 'Subscribed to topic successfully',
                data: { url },
                statusCode: 200
            };
        } catch (error) {
            throw {
                message: error.message || 'Error occurred subcribing to topic',
                error: error,
                statusCode: 400
            };
        }
    }

    public publish = async (publishData: PublishPubSubDto) => {
        const { topic, data } = publishData;
        const subscribers = await this.model.find({
            topic
        });
        try {
            // Call all subscribers with data
            const promises = subscribers.map((subscriber) => {
                return fetch(subscriber.url, { method: 'POST', body: JSON.stringify(data), headers: {
                    'Content-Type': 'application/json'
                } });
            });

            await Promise.all(promises);
            return {
                message: 'Published data successfully',
                data: publishData,
                statusCode: 200
            };
        } catch (error) {
            throw {
                message: error.message || 'Error publishing to data',
                error: error,
                statusCode: 400
            };
        }
  
    }

}