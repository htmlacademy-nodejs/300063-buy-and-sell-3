'use strict';

const {CategoryAdapter} = require(`../../../../adapters`);


module.exports = async (req, res) => {
  const categoryList = await CategoryAdapter.getList();
  const pageContent = {
    categoryList,
  };
  res.render(`pages/offers/add`, pageContent);
};
