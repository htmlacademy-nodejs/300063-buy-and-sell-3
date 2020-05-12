'use strict';

const {Router} = require(`express`);

const {getAddOfferPage, postAddOfferPage} = require(`./methods`);


const addRouter = new Router();
addRouter.get(`/`, getAddOfferPage);
addRouter.post(`/`, postAddOfferPage);

module.exports = addRouter;
