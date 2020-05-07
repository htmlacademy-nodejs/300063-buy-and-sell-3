'use strict';

const server = require(`./api/main`);
const {LoggerCenter} = require(`../../utils`);


const logger = LoggerCenter.getLogger();
module.exports = {
  name: `--server`,
  alias: `-s`,
  run(...args) {
    const [customPort] = args;
    const port = parseInt(customPort, 10) || parseInt(process.env.DEFAULT_PORT, 10);
    server
      .listen(port, () => {
        logger.info(`Server start on ${port} port`);
      })
      .on(`error`, (error) => {
        logger.error(`Server can't start. Error ${error}`);
      });
  }
};
