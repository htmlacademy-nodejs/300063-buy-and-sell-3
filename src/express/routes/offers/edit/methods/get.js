'use strict';

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
  logger.endRequest(req, res.statusCode);
};
