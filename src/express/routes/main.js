'use strict';

const {Router} = require(`express`);

const {getMainPage} = require(`./methods`);
const offersRouter = require(`./offers`);
const registerRouter = require(`./register`);
const loginRouter = require(`./login`);
const searchRouter = require(`./search`);
const myRouter = require(`./my`);

const mainRoute = new Router();

mainRoute.get(`/`, getMainPage);
mainRoute.use(`/offers`, offersRouter);
mainRoute.use(`/register`, registerRouter);
mainRoute.use(`/login`, loginRouter);
mainRoute.use(`/search`, searchRouter);
mainRoute.use(`/my`, myRouter);

module.exports = mainRoute;
