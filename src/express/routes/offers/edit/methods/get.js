'use strict';

const {OfferAdapter, CategoryAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  let offer = await OfferAdapter.getItemById(req.params.id);
  if (Object.keys(req.body).length > 0) {
    offer = {
      id: offer.id,
      comments: offer.comments,
      ...req.body,
    };
  }

  const categoryList = await CategoryAdapter.getList();
  const pageContent = {
    title: `Редактирование предложения`,
    offer,
    categoryList,
  };
  res.render(`pages/offers/edit`, pageContent);
  logger.endRequest(req, res.statusCode);
};
