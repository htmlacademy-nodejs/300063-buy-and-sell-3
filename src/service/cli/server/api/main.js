'use strict';

const express = require(`express`);

const apiCategories = require(`./api-categories`);
const offersApi = require(`./api-offers`);
const searchApi = require(`./api-search`);
const {HttpCodes} = require(`../common`);
const {LoggerCenter} = require(`../../../utils`);
const {debugMiddleware} = require(`../../../middleware`);


const server = express();

server.use(LoggerCenter.expressPinoLogger);
server.use(express.json());
server.use(debugMiddleware);

server.use(`/api/categories`, apiCategories);
server.use(`/api/offers`, offersApi);
server.use(`/api/search`, searchApi);

server.use((req, res) => {
  res
    .status(HttpCodes.NOT_FOUND)
    .send(`Not found`);
  LoggerCenter.errorEndRequest(req, res.statusCode);
});

module.exports = server;
