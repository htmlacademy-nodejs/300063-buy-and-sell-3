'use strict';

const {Router} = require(`express`);

const commentsRouter = require(`./comments`);

const myRouter = new Router();

myRouter.use(`/comments`, commentsRouter);
myRouter.get(`/`, (req, res) => res.send(`/my`));

module.exports = myRouter;
