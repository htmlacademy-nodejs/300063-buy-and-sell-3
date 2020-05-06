'use strict';

const {OfferAdapter} = require(`../../../adapters`);


module.exports = (req, res) => {
  const offerList = OfferAdapter.getList();
  res.status(offerList.statusCode).send(offerList.content);
};
