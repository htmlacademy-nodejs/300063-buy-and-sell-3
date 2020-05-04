'use strict';

const {Router} = require(`express`);

const apiSearch = new Router();

apiSearch.get(`/`, (req, res) => {
    //req.query.title;
    res.send(`GET /api/search?title=${req.query.title}`);
});

module.exports = apiSearch;
