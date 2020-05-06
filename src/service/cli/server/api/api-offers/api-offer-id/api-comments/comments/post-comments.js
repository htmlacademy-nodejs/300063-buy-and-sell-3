'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);


module.exports = async (req, res) => {
  const commentList = OfferCommentAdapter.addItem(req.params.offerId, req.body);
  res.status(commentList.statusCode).send(commentList.content);
};
