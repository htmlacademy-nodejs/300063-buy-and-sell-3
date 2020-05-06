'use strict';

const {Router} = require(`express`);
const getSearch = require(`./get-search`);


const apiSearch = new Router();

apiSearch.get(`/`, getSearch);

module.exports = apiSearch;
