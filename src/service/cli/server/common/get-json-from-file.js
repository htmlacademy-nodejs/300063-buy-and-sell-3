'use strict';

const fs = require(`fs`).promises;

module.exports = async (fileName) => {
  try {
    const fileContent = await fs.readFile(fileName);
    return JSON.parse(fileContent);
  } catch (error) {
    console.error(`Can't read file ${fileName}`, error);
  }
};
