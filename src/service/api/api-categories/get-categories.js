'use strict';

const {CategoryAdapter} = require(`../../adapters`);
const {logger} = require(`../../utils`);


module.exports = (req, res) => {
  const category = CategoryAdapter.getList();
  res.status(category.statusCode).send(category.content);
  logger.endRequest(req, category.statusCode);
};
