'use strict';

const {OfferAdapter} = require(`../../../../adapters`);
const {mockUser} = require(`../../../../utils`);


module.exports = async (req, res) => {
  const offerList = await OfferAdapter.getList();
  console.log(offerList);
  const offerUIList = offerList.slice(0, 3).map((offer) => {
    offer.comments = offer.comments.map((comment, index) => ({
      ...comment,
      user: mockUser(index),
    }));
    return offer;
  });
  const pageContent = {
    title: `Мои предложения`,
    header: `111`,
    isOwner: true,
    offerList: offerUIList,
  };
  console.log(pageContent);
  res.render(`pages/my/comments`, pageContent);
};
