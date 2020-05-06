'use strict';

const server = require(`./api/main`);
const params = require(`./common/params`);


module.exports = {
  name: `--server`,
  alias: `-s`,
  run(...args) {
    const [customPort] = args;
    const port = parseInt(customPort, 10) || params.DEFAULT_PORT;
    server.listen(port);
  }
};
