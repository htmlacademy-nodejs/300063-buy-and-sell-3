'use strict';

const {OfferAdapter} = require(`../../adapters`);
const {LoggerCenter} = require(`../../utils`);


module.exports = async (req, res) => {
  const offerList = OfferAdapter.searchByTitle(req.query.title);
  res.status(offerList.statusCode).send(offerList.content);
  LoggerCenter.endRequest(req, offerList.statusCode);
};
