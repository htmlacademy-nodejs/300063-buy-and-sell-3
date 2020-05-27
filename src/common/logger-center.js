'use strict';

const pino = require(`pino`);
const expressPinoLogger = require(`express-pino-logger`);
const HttpCodes = require(`http-status-codes`);


class LoggerCenter {
  constructor(name) {
    this.logger = pino({
      name,
      level: process.env.LOG_LEVEL || `info`,
    });
    this.expressPinoLogger = expressPinoLogger({logger: this.logger});
  }

  startServer(port) {
    this.logger.info(`Server start on ${port} port`);
  }

  errorStart(error) {
    this.logger.error(`Server can't start. Error ${error}`);
  }

  getLogger(options = {}) {
    return this.logger.child(options);
  }

  endRequest(req, statusCode) {
    const message = `End ${req.method} request to url ${req.originalUrl} with status code ${statusCode}`;
    if (statusCode > HttpCodes.BAD_REQUEST) {
      this.logger.error(message);
    } else {
      this.logger.info(message);
    }
  }

  errorEndRequest(req, statusCode) {
    this.logger.error(`End ${req.method} request to url${req.originalUrl} with error ${statusCode}`);
  }
}

module.exports = LoggerCenter;
