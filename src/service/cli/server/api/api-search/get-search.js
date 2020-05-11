'use strict';

const params = require(`../../params`);
const HttpCode = require(`../../http-codes`);
const {getJSONFromFile} = require(`../../common`);

module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME, res);
  const searchedTitle = req.query.title.toLowerCase();
  const filteredOfferList = offers.filter(offer => {
    const title = offer.title.toLowerCase();
    return title.match(searchedTitle);
  });
  if (filteredOfferList.length === 0) {
    res.status(HttpCode.NOT_FOUND).send();
    return;
  }
  res.status(HttpCode.OK).send(filteredOfferList);
};
