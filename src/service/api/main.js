'use strict';

const express = require(`express`);

const apiCategories = require(`./api-categories`);
const offersApi = require(`./api-offers`);
const searchApi = require(`./api-search`);
const {HttpCodes} = require(`../common`);
const {logger} = require(`../utils`);
const {debugMiddleware} = require(`../middleware`);


const server = express();

server.use(logger.expressPinoLogger);
server.use(express.json());
server.use(debugMiddleware);

server.use(`/api/categories`, apiCategories);
server.use(`/api/offers`, offersApi);
server.use(`/api/search`, searchApi);

server.use((req, res) => {
  res
    .status(HttpCodes.NOT_FOUND)
    .send(`Not found`);
  logger.endRequest(req, res.statusCode);
});

module.exports = server;
