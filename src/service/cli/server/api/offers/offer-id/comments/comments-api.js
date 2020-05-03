'use strict';

const {Router} = require(`express`);

const commentsApi = new Router();

commentsApi.get(`/`, (req, res) => res.send(`GET /api/offers/:offerID/comments`));
commentsApi.post(`/`, (req, res) => res.send(`POST /api/offers/:offerID/comments`));
commentsApi.delete(`/:commentId`, (req, res) => res.send(`DELETE /api/offers/:offerID/comments/:commentId`));

module.exports = commentsApi;
