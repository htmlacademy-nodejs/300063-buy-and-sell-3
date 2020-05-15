'use strict';

const {OfferAdapter, FileAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);
const getEditOfferPage = require(`./get`);


const setFileName = async (req, res) => {
  if (!req.file) {
    const currentOfferResponse = await OfferAdapter.getItemById(req.params.id);
    req.body.picture = req.body.picture || currentOfferResponse.picture;
    return;
  }
  const fileResponse = await FileAdapter.download(req.file);
  if (fileResponse.status === `failed`) {
    logger.endRequest(req, fileResponse.statusCode);
    return getEditOfferPage(req, res);
  }
  req.body.picture = fileResponse.content;
};

const updateOfferItemAndRedirect = async (req, res) => {
  const offerResponse = await OfferAdapter.updateItemById(req.params.id, req.body);
  if (offerResponse.status === `failed`) {
    logger.endRequest(req, offerResponse.statusCode);
    return getEditOfferPage(req, res);
  }
  res.redirect(`/offers/${req.params.id}`);
};


module.exports = async (req, res) => {
  await setFileName(req, res);
  await updateOfferItemAndRedirect(req, res);
  logger.endRequest(req, res.statusCode);
};
