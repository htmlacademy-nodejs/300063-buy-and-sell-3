'use strict';

const HttpCodes = require(`http-status-codes`);

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  let offer = {...req.body};

  if (req.file) {
    const fileResponse = await FileAdapter.download(req.file);
    if (fileResponse.status === `failed`) {
      logger.errorEndRequest(req, fileResponse.statusCode);
      return res.redirect(`/offers/add`);
    }
    offer = {
      ...offer,
      picture: fileResponse.content,
    }
  }
  const offerResponse = OfferAdapter.updateItemById(req.params.id, offer);
  if (offerResponse.status === `failed`) {
    logger.errorEndRequest(req, offerResponse.statusCode);
    return res.redirect(`/offers/edit/${req.params.id}`);
  }
  res.redirect(`/offers/${req.params.id}`);
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
