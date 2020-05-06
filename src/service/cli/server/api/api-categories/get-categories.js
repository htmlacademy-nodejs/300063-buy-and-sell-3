'use strict';

const {CategoryAdapter} = require(`../../adapters`);


module.exports = (req, res) => {
  const category = CategoryAdapter.getList();
  res.status(category.statusCode).send(category.content);
};
