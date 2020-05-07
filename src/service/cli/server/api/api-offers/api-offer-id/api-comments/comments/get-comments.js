'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);
const {LoggerCenter} = require(`../../../../../../../utils`);


module.exports = async (req, res) => {
  const commentList = OfferCommentAdapter.getList(req.params.offerId);
  res.status(commentList.statusCode).send(commentList.content);
  LoggerCenter.endRequest(req, commentList.statusCode);
};
