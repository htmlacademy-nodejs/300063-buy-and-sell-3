'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);
const {logger} = require(`../../../../../utils`);


module.exports = async (req, res) => {
  const comment = OfferCommentAdapter.addItem(req.params.offerId, req.body);
  res.status(comment.statusCode).send(comment.content);
  logger.endRequest(req, comment.statusCode);
};
