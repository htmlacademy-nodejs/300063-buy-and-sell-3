'use strict';

const express = require(`express`);

const HttpCode = require(`../http-codes`);

const categoriesApi = require(`./api-categories`);
const offersApi = require(`./api-offers`);
const searchApi = require(`./api-search`);

const server = express();

server.use(express.json());

server.use(`/api/categories`, categoriesApi);
server.use(`/api/offers`, offersApi);
server.use(`/api/search`, searchApi);

server.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));

module.exports = server;
