'use strict';

const {Router} = require(`express`);

const editRouter = new Router();

editRouter.get(`/`, (req, res) => res.send(`/offers/edit`));
editRouter.get(`/:id`, (req, res) => res.send(`/offers/edit/:id`));

module.exports = editRouter;
