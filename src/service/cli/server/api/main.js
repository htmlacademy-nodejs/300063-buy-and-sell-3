'use strict';

const {Router} = require(`express`);
const categoriesApi = require(`./categories`);
const offersApi = require(`./offers`);
const searchApi = require(`./search`);

const mainApi = new Router();

mainApi.use(`/categories`, categoriesApi);
mainApi.use(`/offers`, offersApi);
mainApi.use(`/search`, searchApi);

module.exports = mainApi;
