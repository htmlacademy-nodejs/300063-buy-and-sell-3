'use strict';

const {Router} = require(`express`);

const commentsRouter = require(`./comments`);
const {getMyPage} = require(`./methods`);


const myRouter = new Router();

myRouter.get(`/`, getMyPage);
myRouter.use(`/comments`, commentsRouter);

module.exports = myRouter;
