'use strict';

const {OfferAdapter, CategoryAdapter} = require(`../../../../adapters`);


module.exports = async (req, res) => {
  const offer = await OfferAdapter.getItemById(req.params.id);
  const categoryList = await CategoryAdapter.getList();
  console.log(offer.categoryList);
  const pageContent = {
    title: `Редактирование предложения`,
    offer,
    categoryList,
  };
  res.render(`pages/offers/edit`, pageContent);
};
