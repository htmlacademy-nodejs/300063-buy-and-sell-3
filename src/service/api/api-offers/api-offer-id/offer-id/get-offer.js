'use strict';

const {OfferAdapter} = require(`../../../../adapters`);
const {LoggerCenter} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const offer = OfferAdapter.getItemById(req.params.offerId);
  res.status(offer.statusCode).send(offer.content);
  LoggerCenter.endRequest(req, offer.statusCode);
};
