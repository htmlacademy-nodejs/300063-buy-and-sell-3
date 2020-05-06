'use strict';

const fs = require(`fs`).promises;

module.exports = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (error) {
    console.error(`Can't read file ${filePath}`, error);
  }
};
