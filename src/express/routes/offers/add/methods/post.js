'use strict';

const getAddOfferPage = require(`./get`);
const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


const downloadFile = async (req, res) => {
  if (!req.file) {
    return;
  }
  const fileResponse = await FileAdapter.download(req.file);
  if (fileResponse.status === `failed`) {
    logger.endRequest(req, fileResponse.statusCode);
    return getAddOfferPage(req, res);
  } else {
    req.body.picture = fileResponse.content;
  }
};

const addOfferItemAndRedirectToMyOffers = async (req, res) => {
  const offer = await OfferAdapter.addItem(req.body);
  if (offer.status === `failed`) {
    logger.endRequest(req, offer.statusCode);
    return getAddOfferPage(req, res);
  }
  res.redirect(`/my`);
};

module.exports = async (req, res) => {
  await downloadFile(req, res);
  await addOfferItemAndRedirectToMyOffers(req, res);
  logger.endRequest(req, res.statusCode);
};
