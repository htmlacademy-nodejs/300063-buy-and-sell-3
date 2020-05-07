'use strict';

const server = require(`./api/main`);
const {LoggerCenter} = require(`../../utils`);


module.exports = {
  name: `--server`,
  alias: `-s`,
  run(...args) {
    const [customPort] = args;
    const port = parseInt(customPort, 10) || parseInt(process.env.DEFAULT_PORT, 10);
    server
      .listen(port, () => LoggerCenter.startServer(port))
      .on(`error`, (error) => LoggerCenter.errorStart(error));
  }
};
