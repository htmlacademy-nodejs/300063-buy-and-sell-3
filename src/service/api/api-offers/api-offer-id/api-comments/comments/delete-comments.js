'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);
const {logger} = require(`../../../../../utils`);


module.exports = async (req, res) => {
  const result = OfferCommentAdapter.deleteItemById(req.params.offerId, req.params.commentId);
  res.status(result.statusCode).send(result.content);
  logger.endRequest(req, result.statusCode);
};
