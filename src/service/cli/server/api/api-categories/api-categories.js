'use strict';

const {Router} = require(`express`);

const getCategories = require(`./get-categories`);

const apiCategories = new Router();

apiCategories.get(`/`, getCategories);

module.exports = apiCategories;
