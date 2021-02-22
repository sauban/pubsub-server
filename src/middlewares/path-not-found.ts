import * as express from 'express';
import PathNotFoundException from '../exceptions/PathNotFoundException';

export default function PathNotFound (req: express.Request, _: express.Response, next: express.NextFunction) {
    return next(new PathNotFoundException(req.url));
}
