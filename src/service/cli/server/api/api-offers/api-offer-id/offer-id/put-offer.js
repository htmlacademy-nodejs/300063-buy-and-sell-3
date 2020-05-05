'use strict';

const params = require(`../../../../params`);
const {getJSONFromFile, saveObjectToJSONFile} = require(`../../../../common`);
const HttpCode = require(`../../../../http-codes`);


module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME);
  const offerIndex = offers.findIndex(item => item.id === req.params.offerId);
  offers[offerIndex] = {
    ...offers[offerIndex],
    ...req.body,
  };
  await saveObjectToJSONFile(params.FILENAME, offers, res);
  res.status(HttpCode.OK).send(offers[offerIndex]);
};
