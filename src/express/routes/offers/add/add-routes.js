'use strict';

const {Router} = require(`express`);

const {getAddOfferPage} = require(`./methods`);


const addRouter = new Router();
addRouter.get(`/`, getAddOfferPage);

module.exports = addRouter;
