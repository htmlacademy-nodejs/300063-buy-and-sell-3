'use strict';

const {Router} = require(`express`);

const searchApi = new Router();

searchApi.get(`/`, (req, res) => {
    //req.query.title;
    res.send(`GET /api/search?title=${req.query.title}`);
});

module.exports = searchApi;
