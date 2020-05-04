'use strict';

const {Router} = require(`express`);

const categoriesApi = require(`./api-categories`);
const offersApi = require(`./api-offers`);
const searchApi = require(`./api-search`);

const mainApi = new Router();

mainApi.use(`/categories`, categoriesApi);
mainApi.use(`/offers`, offersApi);
mainApi.use(`/search`, searchApi);

module.exports = mainApi;
