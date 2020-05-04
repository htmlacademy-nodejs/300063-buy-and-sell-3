'use strict';

const {Router} = require(`express`);

const {deleteComments, getComments, postComments} = require(`./comments`);
const {postOfferCommentMiddleWare} = require(`./middleware`);

const apiComments = new Router({mergeParams: true});

apiComments.use(postOfferCommentMiddleWare);

apiComments.get(`/`, getComments);
apiComments.post(`/`, postComments);
apiComments.delete(`/:commentId`, deleteComments);

module.exports = apiComments;
