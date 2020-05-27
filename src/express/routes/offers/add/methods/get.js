'use strict';

const {CategoryAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const categoryList = await CategoryAdapter.getList();
  const pageContent = {categoryList};
  if (Object.keys(req.body).length > 0) {
    pageContent.offer = req.body;
  }
  res.render(`pages/offers/add`, pageContent);
  logger.endRequest(req, res.statusCode);
};
