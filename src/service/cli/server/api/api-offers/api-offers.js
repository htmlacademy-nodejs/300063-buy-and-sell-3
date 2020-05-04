'use strict';

const {Router} = require(`express`);

const {offerMiddleware} = require(`./middleware`);
const commentsApi = require(`./api-comments`);

const {getResponseOffers, postResponseOffers} = require(`./offers`);
const {deleteOffer, getOffer, putOffer} = require(`./offer-id`);

const apiOffers = new Router();

apiOffers.use(offerMiddleware);

apiOffers.get(`/`, getResponseOffers);
apiOffers.post(`/`, postResponseOffers);

apiOffers.get(`/:offerId`, getOffer);
apiOffers.put(`/:offerId`, putOffer);
apiOffers.delete(`/:offerId`, deleteOffer);
apiOffers.use(`/:offerId/comments`, commentsApi);

module.exports = apiOffers;
