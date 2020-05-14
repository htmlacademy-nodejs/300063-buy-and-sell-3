'use strict';

const HttpCodes = require(`http-status-codes`);

const {OfferAdapter} = require(`../../../adapters`);
const {adaptData, logger} = require(`../../../utils`);


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
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
