'use strict';

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

module.exports = (requiredPropertyList, params) => {
  const propertyList = Object.keys(params);
  const extraPropertyList = propertyList.filter(item => !requiredPropertyList.includes(item));
  if (extraPropertyList.length !== 0) {
    return {
      status: `failed`,
      type: `validation`,
      content: {
        type: `validation`,
        message: getValidationExtraFieldMessage(extraPropertyList),
        fields: extraPropertyList,
      },
    };
  }

  const requiredProperties = requiredPropertyList.filter(item => !params[item]);
  if (requiredProperties.length !== 0) {
    return {
      status: `failed`,
      content: {
        type: `validation`,
        message: getValidationRequiredFieldMessage(requiredProperties),
        fields: requiredProperties,
      },
    };
  }
  return {
    status: `success`,
    content: {
      type: `validation`,
    },
  };
};
