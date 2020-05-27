'use strict';

const getAddOfferPage = require(`./get`);
const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


const setFileName = async (req, res) => {
  if (!req.file) {
    return;
  }
  const fileResponse = await FileAdapter.download(req.file);
  if (fileResponse.status === `failed`) {
    logger.endRequest(req, fileResponse.statusCode);
    await getAddOfferPage(req, res);
  } else {
    req.body.picture = fileResponse.content;
  }
};

const addOfferItemAndRedirectToMyOffers = async (req, res) => {
  const offer = await OfferAdapter.addItem(req.body);
  if (offer.status === `failed`) {
    logger.endRequest(req, offer.statusCode);
    await getAddOfferPage(req, res);
  } else {
    res.redirect(`/my`);
  }
};

module.exports = async (req, res) => {
  await setFileName(req, res);
  await addOfferItemAndRedirectToMyOffers(req, res);
  logger.endRequest(req, res.statusCode);
};
