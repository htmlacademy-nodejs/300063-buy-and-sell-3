'use strict';

const params = require(`../../../params`);
const {getJSONFromFile, saveObjectToJSONFile} = require(`../../../common`);
const HttpCode = require(`../../../http-codes`);

module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME);
  const newOfferList = offers.filter(item => item.id !== req.params.offerId);
  if (offers.length === newOfferList.length) {
    return res.status(HttpCode.NOT_FOUND).send({
      message: `Offer with ${req.params.offerId} id doesn't exist`,
    });
  }
  await saveObjectToJSONFile(params.FILENAME, newOfferList, res);
  res.status(HttpCode.NO_CONTENT).send();
};
