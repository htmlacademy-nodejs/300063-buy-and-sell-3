'use strict';

const {StatusList} = require(`../../../../common`);
const {adaptData, getPluralMessage} = require(`../../../utils`);
const {OfferAdapter} = require(`../../../adapters`);
const mock = require(`../../../../../mock`);


const getSearchTitle = (count) => {
  return getPluralMessage({
    one: `Найдено #{count} публикация`,
    few: `Найдено #{count} публикации`,
    other: `Найдено #{count} публикаций`,
  }, {count});
};


module.exports = async (req, res) => {
  const ticketList = adaptData(mock).slice(0, 8);
  const offerList = await OfferAdapter.searchItem(req.query.title);

  res.render(`pages/search/search`, {
    title: `search`,
    searchTitle: getSearchTitle(offerList.length),
    description: `Страница поиска`,
    offerList: offerList.status === StatusList.FAILED ? [] : adaptData(offerList),
    search: req.query && req.query.title || ``,
    ticketListParams: {
      hiddenTitle: `Самые обсуждаемые предложения`,
      title: `Самые обсуждаемые`,
      list: ticketList,
    },
  });
};
