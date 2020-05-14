'use strict';

const HttpCodes = require(`http-status-codes`);

const {OfferAdapter} = require(`../../../../adapters`);
const {mockUser, logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const offerList = await OfferAdapter.getList();
  const offerUIList = offerList.slice(0, 3).map((offer) => {
    offer.comments = offer.comments.map((comment, index) => ({
      ...comment,
      user: mockUser(index),
    }));
    return offer;
  });
  const pageContent = {
    title: `Мои предложения`,
    isOwner: true,
    offerList: offerUIList,
  };
  res.render(`pages/my/comments`, pageContent);
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
