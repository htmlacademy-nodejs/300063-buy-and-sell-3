'use strict';

const fs = require(`fs`).promises;

const chalk = require(`chalk`);
const {nanoid} = require(`nanoid`);

const {ExitCode} = require(`../../constants`);
const {getRandomInt, shuffle, readContent} = require(`../../utils`);
const params = require(`./params`);

const getPictureFileName = (number) => `item${number.toString().padStart(2, 0)}.jpg`;

const getComments = (textComments) => {
  const emptyList = Array(getRandomInt(0, 5)).fill({});
  return emptyList.map(() => ({
    id: nanoid(),
    text: shuffle(textComments).slice(0, getRandomInt(0, textComments.length - 1)).join(` `),
  }));
};

const generateOffers = (count, titles, sentences, categories, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(),
    type: params.OfferType[Object.keys(params.OfferType)[Math.floor(Math.random() * Object.keys(params.OfferType).length)]],
    title: titles[getRandomInt(0, titles.length - 1)],
    description: shuffle(sentences).slice(1, 5).join(` `),
    sum: getRandomInt(params.SumRestrict.MIN, params.SumRestrict.MAX),
    picture: getPictureFileName(getRandomInt(params.PictureRestrict.MIN, params.PictureRestrict.MAX)),
    categoryList: [categories[getRandomInt(0, categories.length - 1)]],
    comments: getComments(comments),
  }))
);

module.exports = {
  name: `--generate`,
  alias: `-g`,
  async run(...args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || params.DEFAULT_COUNT;

    const titles = await readContent(params.FILE_TITLES_PATH);
    const sentences = await readContent(params.FILE_SENTENCES_PATH);
    const categories = await readContent(params.FILE_CATEGORIES_PATH);
    const comments = await readContent(params.FILE_COMMENTS_PATH);
    const content = JSON.stringify(generateOffers(countOffer, titles, sentences, categories, comments));
    try {
      await fs.writeFile(params.FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
      process.exit(ExitCode.ERROR);
    }
  },
};
