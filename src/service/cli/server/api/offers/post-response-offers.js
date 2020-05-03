'use strict';

const {nanoid} = require(`nanoid`);

const params = require(`../../params`);
const HttpCode = require(`../../http-codes`);
const {getJSONFromFile, saveObjectToJSONFile} = require(`../../common`);


const createNewOffer = (offerParams) => {
  return {
    id: nanoid(),
    ...offerParams,
    comments: [],
  };
};

module.exports = async (req, res) => {
  const newOffer = createNewOffer(req.body);
  const offers = await getJSONFromFile(params.FILENAME, res);
  offers.push(newOffer);
  await saveObjectToJSONFile(params.FILENAME, offers, res);
  res.status(HttpCode.CREATED).send();
};
