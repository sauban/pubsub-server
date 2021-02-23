import winston from 'winston';

const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: winston.format.simple()
  },
};

const logger = winston.createLogger({
  format: winston.format.combine(winston.format.colorize(), winston.format.json()),
  defaultMeta: { service: 'rest-api' },
  exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console(options.console));
}


export class LoggerStream {
  write(message: string) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
  // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  }
}

export default logger;
