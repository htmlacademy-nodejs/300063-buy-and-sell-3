'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);
const {LoggerCenter} = require(`../../../../../utils`);


module.exports = async (req, res) => {
  const comment = OfferCommentAdapter.addItem(req.params.offerId, req.body);
  res.status(comment.statusCode).send(comment.content);
  LoggerCenter.endRequest(req, comment.statusCode);
};
