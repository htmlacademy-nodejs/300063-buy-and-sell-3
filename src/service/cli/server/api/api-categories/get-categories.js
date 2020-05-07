'use strict';

const {CategoryAdapter} = require(`../../adapters`);
const {LoggerCenter} = require(`../../../../utils`);


module.exports = (req, res) => {
  const category = CategoryAdapter.getList();
  res.status(category.statusCode).send(category.content);
  LoggerCenter.endRequest(req, category.statusCode);
};
