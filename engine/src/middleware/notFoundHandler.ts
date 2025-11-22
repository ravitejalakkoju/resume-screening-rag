import { RequestHandler } from 'express';
import { ApiError } from '../utils/httpError';

export const notFoundHandler: RequestHandler = (req, _res, next) => {
  next(new ApiError(404, `Route ${req.originalUrl} not found`));
};
