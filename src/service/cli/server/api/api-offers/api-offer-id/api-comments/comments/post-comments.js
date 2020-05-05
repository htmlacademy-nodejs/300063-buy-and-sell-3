'use strict';

const {nanoid} = require(`nanoid`);

const {getJSONFromFile, saveObjectToJSONFile} = require(`../../../../../common`);
const HttpCode = require(`../../../../../http-codes`);
const params = require(`../../../../../params`);

const createNewComment = (req) => {
  return {
    id: nanoid(),
    text: req.body.text,
  };
};

module.exports = async (req, res) => {
  const newComment = createNewComment(req);
  const offers = await getJSONFromFile(params.FILENAME, res);
  const offer = offers.find(item => item.id === req.params.offerId);
  if (offer === undefined) {
    return res.status(HttpCode.NOT_FOUND).send();
  }
  offer.comments.push(newComment);
  await saveObjectToJSONFile(params.FILENAME, offers);
  res.status(HttpCode.CREATED).send(newComment);
};
