'use strict';

const {getJSONFromFile} = require(`../../../common`);
const HttpCode = require(`../../../http-codes`);
const params = require(`../../../params`);

module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME, res);
  res.status(HttpCode.OK).send(offers);
};
