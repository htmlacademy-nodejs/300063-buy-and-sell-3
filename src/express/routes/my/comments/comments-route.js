'use strict';

const {Router} = require(`express`);

const {getCommentsPage} = require(`./methods`);


const commentsRouter = new Router();

commentsRouter.get(`/`, getCommentsPage);

module.exports = commentsRouter;
