'use strict';

const category = require(`./category`);
const offer = require(`./offer`);
const offerComment = require(`./offer-comment`);

module.exports = {
  ...category,
  ...offer,
  ...offerComment,
};
