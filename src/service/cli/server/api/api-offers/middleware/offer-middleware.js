'use strict';

const {validationPropertyList} = require(`../../../common`);
const {offerPropertyList} = require(`../params`);

const middlewareParamList = [
  {
    method: `POST`,
    regExpUrl: new RegExp(`/api/offers$`, `img`),
  },
  {
    method: `PUT`,
    regExpUrl: new RegExp(`/api/offers/[a-z0-9\\-_]+$`, `igm`),
  },
];

module.exports = (req, res, next) => {
  const isValid = middlewareParamList.every(item => validationPropertyList({
    req,
    res,
    requiredPropertyList: offerPropertyList,
    ...item,
  }));
  if (isValid) {
    next();
  }
};
