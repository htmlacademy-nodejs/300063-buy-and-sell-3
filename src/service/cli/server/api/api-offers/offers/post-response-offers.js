'use strict';

const {OfferAdapter} = require(`../../../adapters`);


module.exports = (req, res) => {
  const offer = OfferAdapter.addItem(req.body);
  res.status(offer.statusCode).send(offer.content);
};
