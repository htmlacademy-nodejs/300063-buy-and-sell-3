'use strict';

module.exports = (fields) => {
  const extraFields = [...fields];
  let message = `Validation error ${extraFields[0]} is extra field`;
  if (extraFields.length > 1) {
    const lastField = extraFields.pop();
    message = `Validation error: ${extraFields.join(`, `)} and ${lastField} are extra fields`;
  }
  return message;
};
