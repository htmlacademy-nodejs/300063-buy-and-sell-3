'use strict';

const {OfferAdapter} = require(`../../adapters`);


module.exports = (req, res) => {
  const offerList = OfferAdapter.searchByTitle(req.query.title);
  res.status(offerList.statusCode).send(offerList.content);
};
