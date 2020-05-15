'use strict';

const {Router} = require(`express`);

const {getAddOfferPage, postAddOfferPage} = require(`./methods`);
const {upload} = require(`../../../utils`);


const addRouter = new Router();
addRouter.get(`/`, getAddOfferPage);
addRouter.post(`/`, upload(`image`), postAddOfferPage);

module.exports = addRouter;
