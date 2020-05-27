'use strict';

const {OfferAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const offer = OfferAdapter.getItemById(req.params.offerId);
  res.status(offer.statusCode).send(offer.content);
  logger.endRequest(req, offer.statusCode);
};
