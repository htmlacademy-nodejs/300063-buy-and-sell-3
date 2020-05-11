'use strict';

const fs = require(`fs`);

const {HttpResponse} = require(`../http-response`);
const {FILE_CATEGORIES_PATH} = require(`../../common`);
const {LoggerCenter} = require(`../../utils`);


const logger = LoggerCenter.getLogger();

class CategoryAdapter {
  constructor() {
    this._list = [];
    try {
      const content = fs.readFileSync(FILE_CATEGORIES_PATH, `utf8`);
      this._list = content.trim().split(`\n`);
      logger.debug(`Category adapter init`);
    } catch (error) {
      logger.error(`Can't read file ${FILE_CATEGORIES_PATH} ${error}`);
    }
  }

  getList() {
    if (this._list.length === 0) {
      return HttpResponse.noContent(`Category list is empty`);
    }
    return HttpResponse.ok(this._list);
  }
}

module.exports = new CategoryAdapter();
