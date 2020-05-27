'use strict';

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
  logger.endRequest(req, res.statusCode);
};
