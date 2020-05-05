'use strict';

const {Router} = require(`express`);

const {deleteComments, getComments, postComments} = require(`./comments`);
const {postOfferCommentMiddleware} = require(`./middleware`);

const apiComments = new Router({mergeParams: true});

apiComments.use(postOfferCommentMiddleware);

apiComments.get(`/`, getComments);
apiComments.post(`/`, postComments);
apiComments.delete(`/:commentId`, deleteComments);

module.exports = apiComments;
