'use strict';

const {Router} = require(`express`);

const addRouter = require(`./add/add-routes`);
const categoryRouter = require(`./category`);
const editRouter = require(`./edit`);


const offersRouter = new Router();

offersRouter.use(`/add`, addRouter);
offersRouter.use(`/category`, categoryRouter);
offersRouter.use(`/edit`, editRouter);

offersRouter.get(`/:id`, (req, res) => res.send(`/offers/:id`));

module.exports = offersRouter;
