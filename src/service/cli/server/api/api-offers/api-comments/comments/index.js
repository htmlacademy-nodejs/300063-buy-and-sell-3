'use strict';

const deleteComments = require(`./delete-comments`);
const getComments = require(`./get-comments`);
const postComments = require(`./post-comments`);

module.exports = {
  deleteComments,
  getComments,
  postComments,
};
