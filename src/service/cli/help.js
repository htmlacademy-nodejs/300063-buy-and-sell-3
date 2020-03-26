'use strict';

const chalk = require(`chalk`);

const descriptions = {
  '--version': {
    info: `получение информации о версии программы. Команда выводит версию приложения. Версия приложения хранится в package.json. Пример вывода версии: 1.0.0.`,
  },
  '--help': {
    info: `выводит информацию о доступных командах приложения, а также вспомогательную информацию.`,
  },
  '--generate': {
    info: `формирует массив с тестовыми объявлениями в количестве count и сохраняет их в файл mocks.json в корневую директорию проекта. Элемент массива — объект с фиксированным набором полей.`,
    option: `<count>`
  },
};

module.exports = {
  name: `--help`,
  alias: `-h`,
  run() {
    for (let key in descriptions) {
      if (descriptions.hasOwnProperty(key)) {
        const description = descriptions[key];
        const command = chalk.cyan(key);
        const option = chalk.yellow(description.option || ``);
        const info = description.info;
        console.info(`${command} ${option} — ${info}`);
      }
    }
  }
};
