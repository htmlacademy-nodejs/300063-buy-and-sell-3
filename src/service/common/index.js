'use strict';


const validationParams = require(`./validation-params`);
const params = require(`./params`);
const HttpCodes = require(`./http-codes`);


module.exports = {
  ...params,
  HttpCodes,
  validationParams,
};
