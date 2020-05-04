'use strict';

const {Router} = require(`express`);

const apiCategories = new Router();

apiCategories.get(`/`, (req, res) => res.send(`GET /api/categories`));

module.exports = apiCategories;
