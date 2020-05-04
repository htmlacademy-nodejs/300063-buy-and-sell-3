'use strict';

const {Router} = require(`express`);

const {postOfferMiddleware, putOfferIdMiddleware} = require(`./middleware`);
const commentsApi = require(`./api-comments`);

const {getResponseOffers, postResponseOffers} = require(`./offers`);
const {deleteOffer, getOffer, putOffer} = require(`./offer-id`);

const apiOffers = new Router();

apiOffers.use(postOfferMiddleware);
apiOffers.use(putOfferIdMiddleware);

apiOffers.get(`/`, async (req, res) => await getResponseOffers(res));
apiOffers.post(`/`, async (req, res) => await postResponseOffers(req, res));

apiOffers.get(`/:offerId`, getOffer);
apiOffers.put(`/:offerId`, putOffer);
apiOffers.delete(`/:offerId`, deleteOffer);
apiOffers.use(`/:offerId/comments`, commentsApi);

module.exports = apiOffers;
