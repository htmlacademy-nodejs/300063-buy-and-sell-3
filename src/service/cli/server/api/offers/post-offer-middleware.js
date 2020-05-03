'use strict';

const HttpCode = require(`../../http-codes`);
const {getValidationFieldMessage} = require(`../../common`);

const requiredOfferFields = [`type`, `title`, `description`, `sum`, `picture`, `categoryList`];

module.exports = (req, res, next) => {
  if (req.method !== `POST` || req.originalUrl !== `/api/offers`) {
    return next();
  }

  const invalidFields = requiredOfferFields.filter(field => req.body[field] === undefined);
  if (invalidFields.length === 0) {
    return next();
  }

  res.status(HttpCode.BAD_REQUEST).send({
    status: `failed`,
    type: `validation`,
    message: getValidationFieldMessage(invalidFields),
    fields: invalidFields,
  });
};
