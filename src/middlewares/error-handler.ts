import { Request, Response, NextFunction } from 'express';
import HttpException from '../exceptions/HttpException';
const ErrorHandler = (err: HttpException, _:Request, res: Response, __:NextFunction) => {
  const status = err.status || 500;
  const message = err.message || 'Something went wrong';
  res
    .status(status)
    .send({
      status,
      message,
    })
};

export default ErrorHandler;
