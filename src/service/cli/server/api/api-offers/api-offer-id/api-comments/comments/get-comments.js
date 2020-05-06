'use strict';

const {OfferCommentAdapter} = require(`../../../../../adapters`);


module.exports = async (req, res) => {
  const commentList = OfferCommentAdapter.getList(req.params.offerId);
  res.status(commentList.statusCode).send(commentList.content);
};
