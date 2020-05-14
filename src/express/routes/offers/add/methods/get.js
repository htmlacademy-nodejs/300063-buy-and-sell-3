'use strict';

const HttpCodes = require(`http-status-codes`);

const {CategoryAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const categoryList = await CategoryAdapter.getList();
  const pageContent = {
    categoryList,
  };
  res.render(`pages/offers/add`, pageContent);
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
