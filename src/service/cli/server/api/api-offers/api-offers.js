'use strict';

const {Router} = require(`express`);

const {offerMiddleware} = require(`./middleware`);

const {getResponseOffers, postResponseOffers} = require(`./offers`);
const apiOfferId = require(`./api-offer-id`);


const apiOffers = new Router();

apiOffers.use(offerMiddleware);

apiOffers.get(`/`, getResponseOffers);
apiOffers.post(`/`, postResponseOffers);
apiOffers.use(`/:offerId`, apiOfferId);


module.exports = apiOffers;
