'use strict';

const generate = require(`./generate`);
const help = require(`./help`);
const version = require(`./version`);
const server = require(`./server`);


const Cli = {
  [generate.name]: generate,
  [generate.alias]: generate,
  [help.name]: help,
  [help.alias]: help,
  [version.name]: version,
  [version.alias]: version,
  [server.name]: server,
  [server.alias]: server,
};

module.exports = {
  Cli,
};
