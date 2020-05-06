'use strict';

const {OfferAdapter} = require(`../../../../adapters`);


module.exports = async (req, res) => {
  const offer = OfferAdapter.updateItemById(req.params.offerId, req.body);
  res.status(offer.statusCode).send(offer.content);
};
