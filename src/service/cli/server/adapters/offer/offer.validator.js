'use strict';

class OfferValidator {
  _requiredPropertyList = [
    `type`,
    `title`,
    `description`,
    `sum`,
    `picture`,
    `categoryList`,
  ];
  get requiredPropertyList() {
    return this._requiredPropertyList;
  }
}

module.exports = new OfferValidator();
