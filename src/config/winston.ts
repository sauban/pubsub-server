import winston from 'winston';

const options = {
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(options.console),
  ],
  exitOnError: false, // do not exit on handled exceptions
});


export class LoggerStream {
  write(message: string) {
    // use the 'info' log level so the output will be picked up by both transports (file and console)
  // use the 'info' log level so the output will be picked up by both transports (file and console)
    logger.info(message);
  }
}

export default logger;
