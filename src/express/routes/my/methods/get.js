'use strict';

const {OfferAdapter} = require(`../../../adapters`);
const {adaptData} = require(`../../../utils`);


module.exports = async (req, res) => {
  const offerList = await OfferAdapter.getList();
  const ticketList = adaptData(offerList);
  const pageContent = {
    title: `Мои предложения`,
    header: `111`,
    isOwner: true,
    ticketListParams: {
      hiddenTitle: `Мои предложения`,
      title: `Самое свежее`,
      list: ticketList,
    },
  };
  res.render(`pages/my/my`, pageContent);
};
