'use strict';


const {Router} = require(`express`);

const postOfferMiddleware = require(`./post-offer-middleware`);
const offerIdApi = require(`./offer-id`);
const getResponseOffers = require(`./get-response-offers`);
const postResponseOffers = require(`./post-response-offers`);

const offersApi = new Router();

offersApi.get(`/`, async (req, res) => await getResponseOffers(res));
offersApi.use(postOfferMiddleware);
offersApi.post(`/`, async (req, res) => await postResponseOffers(req, res));
offersApi.use(`/:offerId`, offerIdApi);

module.exports = offersApi;
