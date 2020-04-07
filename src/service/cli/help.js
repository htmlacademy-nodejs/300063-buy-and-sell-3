'use strict';

const chalk = require(`chalk`);

const descriptions = {
  '--version': {
    info: `версия программы`,
  },
  '--help': {
    info: `информация о доступных командах приложения`,
  },
  '--generate': {
    info: `формирует массив с тестовыми объявлениями в количестве count и сохраняет их в файл mocks.json в корневую директорию проекта`,
    option: `<count>`,
  },
  '--server': {
    info: `запускает сервер отдающий моки, по дефолту порт 3000`,
    option: `<port>`,
  },
};

module.exports = {
  name: `--help`,
  alias: `-h`,
  run() {
    for (let command in descriptions) {
      if (descriptions.hasOwnProperty(command)) {
        const description = descriptions[command];
        const option = description.option || ``;
        const info = description.info;
        console.info(chalk.grey(`${command} ${option} — ${info}`));
      }
    }
  }
};
