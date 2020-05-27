'use strict';

const {nanoid} = require(`nanoid`);

const {OfferAdapter} = require(`../offer`);
const {HttpResponse, StatusList} = require(`../../../common`);


class OfferCommentAdapter {
  getList(offerId) {
    const offerAdapterItem = OfferAdapter.getItemById(offerId);
    if (offerAdapterItem.status === StatusList.FAILED) {
      return offerAdapterItem;
    }
    const {comments} = offerAdapterItem.content;
    return HttpResponse.ok(comments);
  }

  addItem(offerId, comment) {
    const offerAdapterItem = OfferAdapter.getItemById(offerId);
    if (offerAdapterItem.status === StatusList.FAILED) {
      return offerAdapterItem;
    }
    if (comment.text.trim() === ``) {
      return HttpResponse.badRequest(`Comment text can't be empty`);
    }
    const {comments} = offerAdapterItem.content;
    const newComment = {
      id: nanoid(),
      ...comment,
    };
    comments.push(newComment);
    return HttpResponse.created(newComment);
  }

  deleteItemById(offerId, commentId) {
    const offerAdapterItem = OfferAdapter.getItemById(offerId);
    if (offerAdapterItem.status === StatusList.FAILED) {
      return HttpResponse.badRequest(offerAdapterItem.content);
    }
    const {comments} = offerAdapterItem.content;
    const commentIndex = comments.findIndex((comment) => comment.id === commentId);
    if (commentIndex === -1) {
      return HttpResponse.badRequest(`Offer comment with ${commentId} id doesn't exist`);
    }
    comments.splice(commentIndex, 1);
    return HttpResponse.noContent(`Comment with ${commentId} id deleted for offer with ${offerId} id`);
  }
}

module.exports = new OfferCommentAdapter();
