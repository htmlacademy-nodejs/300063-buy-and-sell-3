'use strict';

const {Router} = require(`express`);
const commentsApi = require(`./comments`);


const offerIdApi = new Router();

offerIdApi.get(`/`, (req, res) => res.send(`GET /api/offers/offersID`));
offerIdApi.put(`/`, (req, res) => res.send(`PUT /api/offers/offersID`));
offerIdApi.delete(`/`, (req, res) => res.send(`DELETE /api/offers/offersID`));
offerIdApi.use(`/comments`, commentsApi);

module.exports = offerIdApi;
