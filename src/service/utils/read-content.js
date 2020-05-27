'use strict';

const fs = require(`fs`).promises;
const logger = require(`./logger`);


const log = logger.getLogger();

module.exports = async (filePath) => {
  let parsedContent = [];
  try {
    const content = await fs.readFile(filePath, `utf8`);
    parsedContent = content.trim().split(`\n`);
    log.debug(`Read file ${filePath} content`);
  } catch (error) {
    log.error(`Can't read file ${filePath} ${error}`);
  }
  return parsedContent;
};
