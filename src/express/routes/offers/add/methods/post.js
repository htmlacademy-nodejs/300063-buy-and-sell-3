'use strict';

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const fileResponse = await FileAdapter.download(req.file);
  if (fileResponse.status === `failed`) {
    logger.endRequest(req, fileResponse.statusCode);
    res.redirect(`/offers/add`);
  }
  const offer = await OfferAdapter.addItem({
    ...req.body,
    picture: fileResponse.content,
  });
  if (offer.status === `failed`) {
    logger.endRequest(req, offer.statusCode);
    return res.redirect(`/offers/add`);
  }
  res.redirect(`/my`);
  logger.endRequest(req, res.statusCode);
};
