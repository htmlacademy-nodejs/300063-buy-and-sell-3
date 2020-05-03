'use strict';

const fs = require(`fs`).promises;

const HttpCode = require(`../http-codes`);

module.exports = async (fileName, object, res) => {
  try {
    const content = JSON.stringify(object);
    await fs.writeFile(fileName, content);
  } catch (error) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).send();
  }
};
