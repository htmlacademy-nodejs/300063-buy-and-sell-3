'use strict';

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);


module.exports = async (req, res) => {
  const fileResponse = await FileAdapter.download(req.file);
  if (fileResponse.status === `failed`) {
    res.redirect(`/offers/add`);
  }
  const offer = await OfferAdapter.addItem({
    ...req.body,
    picture: fileResponse.content,
  });
  if (offer.status === `failed`) {
    res.redirect(`/offers/add`);
  }
  res.redirect(`/my`);
};
