'use strict';

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  let offer = {...req.body};

  if (req.file) {
    const fileResponse = await FileAdapter.download(req.file);
    if (fileResponse.status === `failed`) {
      logger.endRequest(req, fileResponse.statusCode);
      return res.redirect(`/offers/add`);
    }
    offer = {
      ...offer,
      picture: fileResponse.content,
    }
  }
  const offerResponse = OfferAdapter.updateItemById(req.params.id, offer);
  if (offerResponse.status === `failed`) {
    logger.endRequest(req, offerResponse.statusCode);
    return res.redirect(`/offers/edit/${req.params.id}`);
  }
  res.redirect(`/offers/${req.params.id}`);
  logger.endRequest(req, res.statusCode);
};
