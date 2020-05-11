'use strict';

const params = require(`../../../params`);
const {getJSONFromFile, saveObjectToJSONFile} = require(`../../../common`);
const HttpCode = require(`../../../http-codes`);

const changeOfferProperties = (req, offer) => {
  if (offer.id !== req.params.offerId) {
    return offer;
  }
  Object.keys(req.body).forEach(offerProperty => {
    offer[offerProperty] = req.body[offerProperty];
  });
  return offer;
};

module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME);
  offers.map(item => changeOfferProperties(req, item));
  await saveObjectToJSONFile(params.FILENAME, offers, res);
  res.status(HttpCode.OK).send(offers);
};
