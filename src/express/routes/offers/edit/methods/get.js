'use strict';

const {OfferAdapter, CategoryAdapter} = require(`../../../../adapters`);
const {logger} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const currentOffer = await OfferAdapter.getItemById(req.params.id);
  const offer = {
    id: currentOffer.id,
    comments: currentOffer.comments,
    ...req.body,
  };
  const categoryList = await CategoryAdapter.getList();
  const pageContent = {
    title: `Редактирование предложения`,
    offer,
    categoryList,
  };
  res.render(`pages/offers/edit`, pageContent);
  logger.endRequest(req, res.statusCode);
};
