'use strict';

const {Router} = require(`express`);

const postOfferMiddleware = require(`./post-offer-middleware`);
const getResponseOffers = require(`./get-response-offers`);
const postResponseOffers = require(`./post-response-offers`);
const {getOffer} = require(`./offer-id`);
const commentsApi = require(`./comments/comments-api`);

const offersApi = new Router();

offersApi.get(`/`, async (req, res) => await getResponseOffers(res));
offersApi.use(postOfferMiddleware);
offersApi.post(`/`, async (req, res) => await postResponseOffers(req, res));
offersApi.get(`/:offerId`, async (req, res) => await getOffer(req, res));
offersApi.put(`/:offerId`, (req, res) => res.send(`PUT /api/offers/offersID`));
offersApi.delete(`/:offerId`, (req, res) => res.send(`DELETE /api/offers/offersID`));
offersApi.use(`/:offerId/comments`, commentsApi);

module.exports = offersApi;
