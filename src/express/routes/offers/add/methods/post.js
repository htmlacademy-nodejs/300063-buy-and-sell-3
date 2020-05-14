'use strict';

const HttpCodes = require(`http-status-codes`);

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const fileResponse = await FileAdapter.download(req.file);
  if (fileResponse.status === `failed`) {
    logger.errorEndRequest(req, fileResponse.statusCode);
    res.redirect(`/offers/add`);
  }
  const offer = await OfferAdapter.addItem({
    ...req.body,
    picture: fileResponse.content,
  });
  if (offer.status === `failed`) {
    logger.errorEndRequest(req, offer.statusCode);
    return res.redirect(`/offers/add`);
  }
  res.redirect(`/my`);
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
