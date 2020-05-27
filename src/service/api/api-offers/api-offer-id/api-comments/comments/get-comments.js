'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);
const {logger} = require(`../../../../../utils`);


module.exports = async (req, res) => {
  const commentList = OfferCommentAdapter.getList(req.params.offerId);
  res.status(commentList.statusCode).send(commentList.content);
  logger.endRequest(req, commentList.statusCode);
};
