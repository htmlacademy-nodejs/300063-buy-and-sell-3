'use strict';

const Request = require(`../request`);

class OfferAdapter {
  async getList() {
    return await Request.get(`offers`);
  }

  async addItem(params) {
    return await Request.post(`offers`, params);
  }

  async getItemById(offerId) {
    return await Request.get(`offers/${offerId}`);
  }

  async updateItemById(offerId, params) {
    return await Request.put(`offers/${offerId}`, params);
  }

  async searchItem(url) {
    return await Request.get(`search?title=${encodeURI(url)}`);
  }
}

module.exports = new OfferAdapter();
