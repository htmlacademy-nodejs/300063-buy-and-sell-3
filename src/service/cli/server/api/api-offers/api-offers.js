'use strict';

const {Router} = require(`express`);

const {postOfferMiddleware} = require(`./middleware`);
const commentsApi = require(`./api-comments`);

const {getResponseOffers, postResponseOffers} = require(`./offers`);
const {getOffer} = require(`./offer-id`);

const apiOffers = new Router();

apiOffers.get(`/`, async (req, res) => await getResponseOffers(res));
apiOffers.use(postOfferMiddleware);
apiOffers.post(`/`, async (req, res) => await postResponseOffers(req, res));

apiOffers.get(`/:offerId`, async (req, res) => await getOffer(req, res));
apiOffers.put(`/:offerId`, (req, res) => res.send(`PUT /api/offers/offersID`));
apiOffers.delete(`/:offerId`, (req, res) => res.send(`DELETE /api/offers/offersID`));
apiOffers.use(`/:offerId/comments`, commentsApi);

module.exports = apiOffers;
