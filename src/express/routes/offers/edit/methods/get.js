'use strict';

const HttpCodes = require(`http-status-codes`);

const {OfferAdapter, CategoryAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const offer = await OfferAdapter.getItemById(req.params.id);
  const categoryList = await CategoryAdapter.getList();
  const pageContent = {
    title: `Редактирование предложения`,
    offer,
    categoryList,
  };
  res.render(`pages/offers/edit`, pageContent);
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
