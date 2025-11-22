import { RequestHandler } from 'express';
import config from '../config/config';

export const getHealth: RequestHandler = (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    environment: config.nodeEnv,
    version: process.env.npm_package_version ?? 'unknown',
  });
};
