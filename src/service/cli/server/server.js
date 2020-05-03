'use strict';


const express = require(`express`);

const params = require(`./params`);
const HttpCode = require(`./http-codes`);
const mainApi = require(`./api`);

const app = express();
app.use(express.json());
app.use(`/api`, mainApi);

app.use((req, res) => res
    .status(HttpCode.NOT_FOUND)
    .send(`Not found`));

module.exports = {
  name: `--server`,
  alias: `-s`,
  run(args) {
    const [customPort] = args;
    const port = parseInt(customPort, 10) || params.DEFAULT_PORT;
    app.listen(port);
  }
};
