'use strict';

const adaptData = require(`./adapt-data`);
const mockUser = require(`./mock-user`);
const upload = require(`./upload`);
const logger = require(`./logger`);
const getPluralMessage = require(`./get-plural-message`);


module.exports = {
  adaptData,
  mockUser,
  upload,
  logger,
  getPluralMessage,
};
