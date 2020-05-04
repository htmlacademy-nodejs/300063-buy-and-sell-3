'use strict';

const HttpCode = require(`../../../http-codes`);
const {getValidationRequiredFieldMessage} = require(`../../../common`);
const {offerPropertyList} = require(`./params`);

module.exports = (req, res, next) => {
  if (req.method !== `POST` || req.originalUrl !== `/api/offers`) {
    return next();
  }

  const invalidFields = offerPropertyList.filter(field => req.body[field] === undefined);
  if (invalidFields.length === 0) {
    return next();
  }

  res.status(HttpCode.BAD_REQUEST).send({
    status: `failed`,
    type: `validation`,
    message: getValidationRequiredFieldMessage(invalidFields),
    fields: invalidFields,
  });
};
