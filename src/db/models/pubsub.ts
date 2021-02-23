import * as mongoose from 'mongoose';
import PubSub from '../entities/pubsub.interface';

export const PubSubSchema = new mongoose.Schema({
  topic: String,
  url: String,
});

const pubSubModel = mongoose.model<PubSub & mongoose.Document>('PubSub', PubSubSchema);

export default pubSubModel;