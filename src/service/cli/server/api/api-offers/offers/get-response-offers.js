'use strict';

const {OfferAdapter} = require(`../../../adapters`);
const {LoggerCenter} = require(`../../../../../utils`);


module.exports = async (req, res) => {
  const offerList = OfferAdapter.getList();
  res.status(offerList.statusCode).send(offerList.content);
  LoggerCenter.endRequest(req, offerList.statusCode);
};
