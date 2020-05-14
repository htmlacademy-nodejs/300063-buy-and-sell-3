'use strict';

const HttpCodes = require(`http-status-codes`);

const {adaptData, logger} = require(`../../utils`);
const {OfferAdapter} = require(`../../adapters`);


module.exports = async (req, res) => {
  const offerList = await OfferAdapter.getList();
  const ticketList = adaptData(offerList);
  const pageContent = {
    title: `Главная`,
    header: `Шаблонизатор в действии`,
    description: `Страница сформирована при помощи шаблонизатора Pug`,
    isOwner: false,
    newTicketListParams: {
      hiddenTitle: `Самые новые предложения`,
      title: `Самое свежее`,
      list: ticketList,
    },
    popularTicketListParams: {
      hiddenTitle: `Самые обсуждаемые предложения`,
      title: `Самые обсуждаемые`,
      list: ticketList.slice(0, 4),
    },
  };
  res.render(`index`, pageContent);
  if (res.statusCode >= HttpCodes.BAD_REQUEST) {
    logger.errorEndRequest(req, res.statusCode);
  }
};
