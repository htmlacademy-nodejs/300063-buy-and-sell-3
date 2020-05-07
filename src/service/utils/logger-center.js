'use strict';

const pino = require(`pino`);
const expressPinoLogger = require(`express-pino-logger`);


class LoggerCenter {
  constructor() {
    const logger = pino({
      name: `server`,
      level: process.env.LOG_LEVEL || `info`,
    });
    this.logger = logger;
    this.pinoLogger = expressPinoLogger({logger});
  }

  getLogger(options = {}) {
    return this.logger.child(options);
  }

  startRequest(req) {
    this.logger.debug(`Start ${req.method} request to url ${req.url}`);
  }

  endRequest(req, statusCode) {
    this.logger.info(`End ${req.method} request to url ${req.originalUrl} with status code ${statusCode}`);
  };

  errorEndRequest(req, statusCode) {
    this.logger.error(`End ${req.method} request to ${req.originalUrl} with error ${statusCode}`);
  }
}

module.exports = new LoggerCenter();

// const logger = pino({
//   name: `server`,
//   level: process.env.LOG_LEVEL || `info`,
// });
// const pinoLogger = expressPinoLogger({logger});
//
//
// const getLogger = (options = {}) => {
//   return logger.child(options);
// };
//
// const endRequest = (req, statusCode) => {
//   logger.info(`End ${req.method} request to url ${req.originalUrl} with status code ${statusCode}`);
// };

// module.exports = {
//   logger,
//   pinoLogger,
//   getLogger,
//   endRequest,
// };
