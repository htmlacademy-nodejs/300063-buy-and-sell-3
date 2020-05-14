'use strict';

const HttpCodes = require(`http-status-codes`);
const {Router} = require(`express`);

const {getMainPage} = require(`./methods`);
const offersRouter = require(`./offers`);
const registerRouter = require(`./register`);
const loginRouter = require(`./login`);
const searchRouter = require(`./search`);
const myRouter = require(`./my`);
const {logger} = require(`../utils`);


const mainRoute = new Router();

mainRoute.get(`/`, getMainPage);
mainRoute.use(`/offers`, offersRouter);
mainRoute.use(`/register`, registerRouter);
mainRoute.use(`/login`, loginRouter);
mainRoute.use(`/search`, searchRouter);
mainRoute.use(`/my`, myRouter);

mainRoute.use((req, res) => {
  res
    .status(HttpCodes.NOT_FOUND)
    .send(`Not found`);
  logger.errorEndRequest(req, res.statusCode);
});

module.exports = mainRoute;
