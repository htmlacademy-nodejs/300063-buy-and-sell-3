'use strict';

const fs = require(`fs`).promises;

const HttpCode = require(`../http-codes`);

module.exports = async (fileName, res) => {
  try {
    const fileContent = await fs.readFile(fileName, res);
    return JSON.parse(fileContent);
  } catch (error) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).send();
  }
};
