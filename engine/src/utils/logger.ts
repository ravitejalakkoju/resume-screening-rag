import config, { LogLevel } from '../config/config';

type LogMeta = Record<string, unknown>;

const levelPriority: Record<LogLevel, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

const shouldLog = (level: LogLevel) =>
  levelPriority[level] >= levelPriority[config.logLevel];

const formatPrefix = (level: LogLevel, meta?: LogMeta) => {
  const timestamp = new Date().toISOString();
  const parts = [`[${timestamp}]`, `[${level.toUpperCase()}]`];

  if (meta?.requestId && typeof meta.requestId === 'string') {
    parts.push(`[req:${meta.requestId}]`);
  }

  return parts.join(' ');
};

const log =
  (level: LogLevel) =>
  (message: string, meta?: LogMeta): void => {
    if (!shouldLog(level)) return;

    const prefix = formatPrefix(level, meta);
    const hasMeta = meta && Object.keys(meta).length > 0;

    console.log(prefix, message, hasMeta ? meta : '');
  };

export const logger = {
  debug: log('debug'),
  info: log('info'),
  warn: log('warn'),
  error: log('error'),
};

export type Logger = typeof logger;
