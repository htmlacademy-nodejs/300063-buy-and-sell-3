'use strict';

const {Router} = require(`express`);

const {getEditOfferPage, postOffer} = require(`./methods`);
const {upload} = require(`../../../utils`);


const editRouter = new Router();

editRouter.get(`/:id`, getEditOfferPage);
editRouter.post(`/:id`, upload(`image`), postOffer);

module.exports = editRouter;
