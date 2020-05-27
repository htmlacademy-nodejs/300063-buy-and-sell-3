'use strict';

const {Router} = require(`express`);

const {getSearchPage} = require(`./methods`);


const searchRouter = new Router();

searchRouter.get(`/`, getSearchPage);

module.exports = searchRouter;
