'use strict';

const fs = require(`fs`).promises;
const LoggerCenter = require(`./logger-center`);


const logger = LoggerCenter.getLogger();

module.exports = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    const parsedContent = content.trim().split(`\n`);
    logger.debug(`Read file ${parsedContent} content`);
    return parsedContent
  } catch (error) {
    logger.error(`Can't read file ${filePath} ${error}`);
  }
};
