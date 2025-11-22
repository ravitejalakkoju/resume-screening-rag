import { randomUUID } from 'crypto';
import { NextFunction, Request, Response } from 'express';
import { logger } from '../utils/logger';

export const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const requestId = randomUUID();
  const start = Date.now();

  req.id = requestId;
  logger.info(`Incoming ${req.method} ${req.originalUrl}`, { requestId });

  res.on('finish', () => {
    const duration = Date.now() - start;
    logger.info(
      `Completed ${req.method} ${req.originalUrl} ${res.statusCode} (${duration}ms)`,
      { requestId },
    );
  });

  next();
};
