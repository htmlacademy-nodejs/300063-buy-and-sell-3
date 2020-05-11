'use strict';

const getJSONFromFile = require(`./get-json-from-file`);
const validationPropertyList = require(`./validation-property-list`);
const saveObjectToJSONFile = require(`./save-object-to-json-file`);

module.exports = {
  getJSONFromFile,
  saveObjectToJSONFile,
  validationPropertyList,
};
