'use strict';

const Request = require(`../request`);


class CategoryAdapter {
  getList() {
    return Request.get(`categories`);
  }
}

module.exports = new CategoryAdapter();
