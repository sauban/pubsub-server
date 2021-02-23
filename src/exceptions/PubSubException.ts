import HttpException from './HttpException';
 
class PubSubException extends HttpException {
  constructor(errorObj: object) {
    super(400, 'PubSubException occurred', errorObj);
  }
}

export default PubSubException;
