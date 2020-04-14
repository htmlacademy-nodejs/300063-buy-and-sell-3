'use strict';

const {Router} = require(`express`);

const editRouter = new Router();

editRouter.get(`/:id`, (req, res) => res.render(`offers/edit`));

module.exports = editRouter;
