'use strict';

const {Router} = require(`express`);

const {getEditOfferPage} = require(`./methods`);


const editRouter = new Router();

editRouter.get(`/:id`, getEditOfferPage);

module.exports = editRouter;
