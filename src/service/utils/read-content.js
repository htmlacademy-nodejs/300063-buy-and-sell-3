'use strict';

const fs = require(`fs`).promises;
const LoggerCenter = require(`./logger-center`);


const logger = LoggerCenter.getLogger();

module.exports = async (filePath) => {
  let parsedContent = [];
  try {
    const content = await fs.readFile(filePath, `utf8`);
    parsedContent = content.trim().split(`\n`);
    logger.debug(`Read file ${filePath} content`);
  } catch (error) {
    logger.error(`Can't read file ${filePath} ${error}`);
  }
  return parsedContent;
};
