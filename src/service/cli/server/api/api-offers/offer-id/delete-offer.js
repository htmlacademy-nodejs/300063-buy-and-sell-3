'use strict';

const params = require(`../../../params`);
const {getJSONFromFile, saveObjectToJSONFile} = require(`../../../common`);
const HttpCode = require(`../../../http-codes`);

module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME);
  const newOfferList = offers.filter(item => item.id !== req.params.offerId);
  await saveObjectToJSONFile(params.FILENAME, newOfferList, res);
  res.status(HttpCode.NO_CONTENT).send();
};
