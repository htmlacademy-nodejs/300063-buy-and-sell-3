'use strict';

const fs = require(`fs`).promises;

const express = require(`express`);

const params = require(`./params`);
const HttpCode = require(`./http-codes`);

const app = express();
app.use(express.json());
app.get(`/offers`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(params.FILENAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).send(err);
  }
});

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
