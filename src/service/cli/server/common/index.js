const getJSONFromFile = require(`./get-json-from-file`);
const getValidationRequiredFieldMessage = require(`./get-validation-required-field-message`);
const getValidationExtraFieldMessage = require(`./get-validation-extra-field-message`);

const saveObjectToJSONFile = require(`./save-object-to-json-file`);

module.exports = {
  getJSONFromFile,
  getValidationRequiredFieldMessage,
  getValidationExtraFieldMessage,
  saveObjectToJSONFile,
};
