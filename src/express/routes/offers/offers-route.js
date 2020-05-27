'use strict';

const {Router} = require(`express`);

const addRouter = require(`./add`);
const categoryRouter = require(`./category`);
const editRouter = require(`./edit`);
const {getOfferPageById} = require(`./methods`);


const offersRouter = new Router();

offersRouter.use(`/add`, addRouter);
offersRouter.use(`/category`, categoryRouter);
offersRouter.use(`/edit`, editRouter);


offersRouter.get(`/:id`, getOfferPageById);

module.exports = offersRouter;
