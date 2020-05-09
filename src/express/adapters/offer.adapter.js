'use strict';

const Request = require(`./request`);


class OfferAdapter {
  async getList() {
    return await Request.get(`offers`);
  }

  async getItemById(offerId) {
    return await Request.get(`offers/${offerId}`);
  }
}

module.exports = new OfferAdapter();
