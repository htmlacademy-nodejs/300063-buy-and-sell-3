'use strict';

const HttpCode = require(`../../../http-codes`);
const {getValidationExtraFieldMessage} = require(`../../../common`);
const {offerPropertyList} = require(`./params`);

module.exports = (req, res, next) => {
  const isNotOfferIdRoute = !req.originalUrl.match(/\/api\/offers\/[a-z0-9\-_]+$/igm);
  if (req.method !== `PUT` || isNotOfferIdRoute) {
    return next();
  }

  const extraPropertyList = Object.keys(req.body).filter(item => !offerPropertyList.includes(item));
  if (extraPropertyList.length === 0) {
    return next();
  }
  console.log(extraPropertyList);

  res.status(HttpCode.BAD_REQUEST).send({
    status: `failed`,
    type: `validation`,
    message: getValidationExtraFieldMessage(extraPropertyList),
    fields: extraPropertyList,
  });
};
