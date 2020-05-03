'use strict';

const {Router} = require(`express`);
const offerIdApi = require(`./offer-id`);

const offersApi = new Router();

offersApi.get(`/`, (req, res) => res.send(`GET /api/offers`));
offersApi.post(`/`, (req, res) => res.send(`POST /api/offers`));
offersApi.use(`/:offerId`, offerIdApi);

module.exports = offersApi;
