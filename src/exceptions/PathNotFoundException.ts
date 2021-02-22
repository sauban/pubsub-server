import HttpException from './HttpException';
 
class PathNotFoundException extends HttpException {
  constructor(url: string) {
    super(404, `Path '${url}' not found`);
  }
}

export default PathNotFoundException;
