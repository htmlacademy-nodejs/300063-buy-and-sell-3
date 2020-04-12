'use strict';

const fs = require(`fs`).promises;

const chalk = require(`chalk`);

const {ExitCode} = require(`../../constants`);
const {getRandomInt, shuffle} = require(`../../utils`);
const params = require(`./params`);

const getPictureFileName = (number) => number > params.MAX_NUMBER_WITH_ZERO ? `item${number}.jpg` : `item0${number}.jpg`;

const generateOffers = (count, titles, sentences, categories) => (
  Array(count).fill({}).map(() => ({
    type: params.OfferType[Object.keys(params.OfferType)[Math.floor(Math.random() * Object.keys(params.OfferType).length)]],
    title: titles[getRandomInt(0, titles.length - 1)],
    description: shuffle(sentences).slice(1, 5).join(` `),
    sum: getRandomInt(params.SumRestrict.MIN, params.SumRestrict.MAX),
    picture: getPictureFileName(getRandomInt(params.PictureRestrict.MIN, params.PictureRestrict.MAX)),
    categoryList: [categories[getRandomInt(0, categories.length - 1)]],
  }))
);

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  alias: `-g`,
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || params.DEFAULT_COUNT;

    const titles = await readContent(params.FILE_TITLES_PATH);
    const sentences = await readContent(params.FILE_SENTENCES_PATH);
    const categories = await readContent(params.FILE_CATEGORIES_PATH);
    const content = JSON.stringify(generateOffers(countOffer, titles, sentences, categories));
    try {
      await fs.writeFile(params.FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
      process.exit(ExitCode.ERROR);
    }
  },
};
