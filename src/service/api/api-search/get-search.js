'use strict';

const {OfferAdapter} = require(`../../adapters`);
const {logger} = require(`../../utils`);


module.exports = async (req, res) => {
  const offerList = OfferAdapter.searchByTitle(req.query.title);
  res.status(offerList.statusCode).send(offerList.content);
  logger.endRequest(req, offerList.statusCode);
};
