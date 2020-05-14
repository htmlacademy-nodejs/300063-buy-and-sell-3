'use strict';

const HttpCodes = require(`http-status-codes`);

const {OfferAdapter} = require(`../../../adapters`);
const {logger} = require(`../../../utils`);


module.exports = async (req, res) => {
  const offer = await OfferAdapter.getItemById(req.params.id);
  res.render(`pages/offers/id`, {
    isAuthorized: false,
    offer,
  });
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
