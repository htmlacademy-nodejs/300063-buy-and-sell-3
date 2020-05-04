'use strict';

const params = require(`../../../params`);
const {getJSONFromFile} = require(`../../../common`);
const HttpCode = require(`../../../http-codes`);

module.exports = async (req, res) => {
  const offers = await getJSONFromFile(params.FILENAME, res);
  const offer = offers.find(item => item.id === req.params.offerId);

  if (offer === undefined) {
    return res.status(HttpCode.NOT_FOUND).send();
  }
  res.status(HttpCode.OK).send(offer);
};
