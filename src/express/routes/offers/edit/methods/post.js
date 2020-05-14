'use strict';

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);


module.exports = async (req, res) => {
  let offer = {...req.body};

  if (req.file) {
    const fileResponse = await FileAdapter.download(req.file);
    if (fileResponse.status === `failed`) {
      res.redirect(`/offers/add`);
    }
    offer = {
      ...offer,
      picture: fileResponse.content,
    }
  }
  const offerResponse = OfferAdapter.updateItemById(req.params.id, offer);
  if (offerResponse.status === `failed`) {
    res.redirect(`/offers/edit/${req.params.id}`);
  }
  res.redirect(`/offers/${req.params.id}`);
};
