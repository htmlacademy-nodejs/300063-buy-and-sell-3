const generate = require('./generate');
const help = require('./help');
const version = require('./version');

const Cli = {
  [generate.name]: generate,
  [generate.alias]: generate,
  [help.name]: help,
  [help.alias]: help,
  [version.name]: version,
  [version.alias]: version,

};

module.exports = {
  Cli,
};
