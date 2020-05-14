'use strict';

const {OfferAdapter} = require(`../../../adapters`);


module.exports = async (req, res) => {
  const offer = await OfferAdapter.getItemById(req.params.id);
  res.render(`pages/offers/id`, {
    isAuthorized: false,
    offer,
  });
};
