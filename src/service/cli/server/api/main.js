'use strict';

const express = require(`express`);

const apiCategories = require(`./api-categories`);
const offersApi = require(`./api-offers`);
const searchApi = require(`./api-search`);
const {HttpCodes} = require(`../common`);
const {LoggerCenter} = require(`../../../utils`);


const server = express();

server.use(LoggerCenter.pinoLogger);
server.use(express.json());
server.use((req, res, next) => {
  LoggerCenter.startRequest(req);
  next();
});

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
