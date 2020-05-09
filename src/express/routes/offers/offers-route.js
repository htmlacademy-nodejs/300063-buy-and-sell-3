'use strict';

const {Router} = require(`express`);

const addRouter = require(`./add/add-routes`);
const categoryRouter = require(`./category`);
const editRouter = require(`./edit`);
const {OfferAdapter} = require(`../../adapters`);


const offersRouter = new Router();

offersRouter.use(`/add`, addRouter);
offersRouter.use(`/category`, categoryRouter);
offersRouter.use(`/edit`, editRouter);


offersRouter.get(`/:id`, async (req, res) => {
  // await OfferAdapter.getItemById(req.params.id);
  res.render(`pages/offers/id`, {
    isAuthorized: false,
  });
});

module.exports = offersRouter;
