'use strict';

const {OfferAdapter} = require(`../../../adapters`);
const {LoggerCenter} = require(`../../../../../utils`);


module.exports = async (req, res) => {
  const offer = OfferAdapter.addItem(req.body);
  res.status(offer.statusCode).send(offer.content);
  LoggerCenter.endRequest(req, offer.statusCode);
};
