'use strict';

const category = require(`./category`);
const offer = require(`./offer`);
const comment = require(`./comment`);
const file = require(`./file`);


module.exports = {
  ...category,
  ...offer,
  ...comment,
  ...file,
};
