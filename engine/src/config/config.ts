import { config as loadEnv } from 'dotenv';

loadEnv();

export type LogLevel = 'debug' | 'info' | 'warn' | 'error';
export type NodeEnv = 'development' | 'test' | 'production';

export interface AppConfig {
  port: number;
  nodeEnv: NodeEnv;
  logLevel: LogLevel;
}

const parseLogLevel = (value?: string): LogLevel => {
  switch (value) {
    case 'debug':
    case 'info':
    case 'warn':
    case 'error':
      return value;
    default:
      return 'info';
  }
};

const config: AppConfig = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: (process.env.NODE_ENV as NodeEnv) || 'development',
  logLevel: parseLogLevel(process.env.LOG_LEVEL),
};

export default config;
