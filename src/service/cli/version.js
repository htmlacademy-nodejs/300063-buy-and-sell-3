'use strict';

const packageJson = require(`../../../package`);

module.exports = {
  name: `--version`,
  alias: `-v`,
  run() {
    const version = packageJson.version;
    console.info(version);
  },
};
