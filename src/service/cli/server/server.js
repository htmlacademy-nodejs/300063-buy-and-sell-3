'use strict';

const server = require(`../../api/main`);
const {logger} = require(`../../utils`);


module.exports = {
  name: `--server`,
  alias: `-s`,
  run(...args) {
    const [customPort] = args;
    const port = parseInt(customPort, 10) || parseInt(process.env.SERVER_API_PORT, 10) || 3000;
    server
      .listen(port, () => logger.startServer(port))
      .on(`error`, (error) => logger.errorStart(error));
  }
};
