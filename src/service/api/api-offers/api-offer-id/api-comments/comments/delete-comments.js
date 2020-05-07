'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);
const {LoggerCenter} = require(`../../../../../utils`);


module.exports = async (req, res) => {
  const result = OfferCommentAdapter.deleteItemById(req.params.offerId, req.params.commentId);
  res.status(result.statusCode).send(result.content);
  LoggerCenter.endRequest(req, result.statusCode);
};
