'use strict';

const params = require(`../../../../params`);
const {getJSONFromFile, saveObjectToJSONFile} = require(`../../../../common`);
const HttpCode = require(`../../../../http-codes`);

module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME);
  const offer = offers.find(item => item.id === req.params.offerId);
  if (offer === undefined) {
    return res.status(HttpCode.NOT_FOUND).send({
      message: `Offer with ${req.params.offerId} id doesn't exist`,
    });
  }
  const commentList = offer.comments;
  const newCommentList = commentList.filter(comment => comment.id !== req.params.commentId);
  if (commentList.length === newCommentList.length) {
    return res.status(HttpCode.NOT_FOUND).send({
      message: `Comment with ${req.params.commentId} id doesn't exist`,
    });
  }
  offer.comments = newCommentList;
  await saveObjectToJSONFile(params.FILENAME, offers, res);
  res.status(HttpCode.NO_CONTENT).send();
};
