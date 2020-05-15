'use strict';

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);
const getEditOfferPage = require(`./get`);



module.exports = async (req, res) => {
  let offer = {...req.body};

  if (req.file) {
    const fileResponse = await FileAdapter.download(req.file);
    if (fileResponse.status === `failed`) {
      logger.endRequest(req, fileResponse.statusCode);
      return getEditOfferPage(req, res);
    }
    offer = {
      ...offer,
      picture: fileResponse.content,
    };
  } else {
    const currentOfferResponse = await OfferAdapter.getItemById(req.params.id);
    offer.picture = currentOfferResponse.picture;
  }
  const offerResponse = await OfferAdapter.updateItemById(req.params.id, offer);
  if (offerResponse.status === `failed`) {
    logger.endRequest(req, offerResponse.statusCode);
    return getEditOfferPage(req, res);
  }
  res.redirect(`/offers/${req.params.id}`);
  logger.endRequest(req, res.statusCode);
};
