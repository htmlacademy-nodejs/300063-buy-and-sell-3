'use strict';

const {Router} = require(`express`);

const categoriesApi = new Router();

categoriesApi.get(`/`, (req, res) => res.send(`GET /api/categories`));

module.exports = categoriesApi;
