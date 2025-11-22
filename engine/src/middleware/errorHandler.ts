import { ErrorRequestHandler } from 'express';
import { ApiError } from '../utils/httpError';
import { logger } from '../utils/logger';

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const status = err instanceof ApiError ? err.statusCode : 500;
  const message = err instanceof ApiError ? err.message : 'Internal server error';

  logger.error(message, {
    requestId: req.id,
    stack: err.stack,
    status,
  });

  res.status(status).json({
    message,
    requestId: req.id,
    ...(err instanceof ApiError && err.details ? { details: err.details } : {}),
  });
};
