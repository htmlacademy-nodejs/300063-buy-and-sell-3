'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);


module.exports = async (req, res) => {
  const commentList = OfferCommentAdapter.deleteItemById(req.params.offerId, req.params.commentId);
  res.status(commentList.statusCode).send(commentList.content);
};
