'use strict';

const {Router} = require(`express`);

const addRouter = new Router();
addRouter.get(`/`, (req, res) => res.render(`pages/offers/add`));

module.exports = addRouter;
