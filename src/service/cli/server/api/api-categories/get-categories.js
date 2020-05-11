'use strict';

const HttpCode = require(`../../http-codes`);
const params = require(`../../params`);
const {readContent} = require(`../../../../utils`);

module.exports = async (req, res) => {
  try {
    const categories = await readContent(params.FILE_CATEGORIES_PATH);
    res.status(HttpCode.OK).send({categories});
  } catch (error) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).send();
  }

};
