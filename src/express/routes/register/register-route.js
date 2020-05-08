'use strict';

const {Router} = require(`express`);

const registerRoute = new Router();
registerRoute.get(`/`, (req, res) => res.render(`pages/register/register`));

module.exports = registerRoute;
