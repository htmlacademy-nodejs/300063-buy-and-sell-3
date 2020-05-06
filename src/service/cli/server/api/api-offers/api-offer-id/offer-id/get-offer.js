'use strict';

const {OfferAdapter} = require(`../../../../adapters`);


module.exports = async (req, res) => {
  const offer = OfferAdapter.getItemById(req.params.offerId);
  res.status(offer.statusCode).send(offer.content);
};
