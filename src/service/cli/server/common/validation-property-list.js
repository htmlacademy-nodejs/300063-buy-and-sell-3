'use strict';

const HttpCode = require(`../http-codes`);

const getValidationExtraFieldMessage = (fields) => {
  const extraFields = [...fields];
  let message = `Validation error ${extraFields[0]} is extra field`;
  if (extraFields.length > 1) {
    const lastField = extraFields.pop();
    message = `Validation error: ${extraFields.join(`, `)} and ${lastField} are extra fields`;
  }
  return message;
};

const getValidationRequiredFieldMessage = (fields) => {
  const invalidFields = [...fields];
  let message = `Validation error ${invalidFields[0]} is required field`;
  if (invalidFields.length > 1) {
    const lastField = invalidFields.pop();
    message = `Validation error: ${invalidFields.join(`, `)} and ${lastField} are required fields`;
  }
  return message;
};

module.exports = ({res, req, method, requiredPropertyList, regExpUrl}) => {
  const isNotOfferComments = !req.originalUrl.match(regExpUrl);
  if (req.method !== method || isNotOfferComments) {
    return true;
  }

  const propertyList = Object.keys(req.body);
  const extraPropertyList = propertyList.filter(item => !requiredPropertyList.includes(item));
  if (extraPropertyList.length !== 0) {
    res.status(HttpCode.BAD_REQUEST).send({
      status: `failed`,
      type: `validation`,
      message: getValidationExtraFieldMessage(extraPropertyList),
      fields: extraPropertyList,
    });
    return false;
  }

  const requiredProperties = requiredPropertyList.filter(item => !propertyList.includes(item));
  if (requiredProperties.length !== 0) {
    res.status(HttpCode.BAD_REQUEST).send({
      status: `failed`,
      type: `validation`,
      message: getValidationRequiredFieldMessage(requiredProperties),
      fields: requiredProperties,
    });
    return false;
  }
  return true;
};
