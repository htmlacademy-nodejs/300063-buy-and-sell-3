'use strict';

const {Router} = require(`express`);

const {deleteOffer, getOffer, putOffer} = require(`./offer-id`);
const commentsApi = require(`./api-comments`);

const apiOfferId = new Router({mergeParams: true});

apiOfferId.get(`/`, getOffer);
apiOfferId.put(`/`, putOffer);
apiOfferId.delete(`/`, deleteOffer);
apiOfferId.use(`/comments`, commentsApi);

module.exports = apiOfferId;
