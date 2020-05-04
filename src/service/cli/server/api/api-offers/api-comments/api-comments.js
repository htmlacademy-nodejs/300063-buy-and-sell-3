'use strict';

const {Router} = require(`express`);

const apiComments = new Router();

apiComments.get(`/`, (req, res) => res.send(`GET /api/offers/:offerID/comments`));
apiComments.post(`/`, (req, res) => res.send(`POST /api/offers/:offerID/comments`));
apiComments.delete(`/:commentId`, (req, res) => res.send(`DELETE /api/offers/:offerID/comments/:commentId`));

module.exports = apiComments;
