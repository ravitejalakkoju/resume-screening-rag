import app from './app';
import config from './config/config';
import { logger } from './utils/logger';

const server = app.listen(config.port, () => {
  logger.info(`Server running at http://localhost:${config.port} (${config.nodeEnv})`);
});

const gracefulShutdown = () => {
  logger.info('Shutting down server');
  server.close(() => {
    logger.info('HTTP server closed');
    process.exit(0);
  });
};

process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);

export default server;
