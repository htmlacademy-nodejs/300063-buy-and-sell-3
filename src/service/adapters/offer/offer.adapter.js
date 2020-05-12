'use strict';

const fs = require(`fs`);
const {nanoid} = require(`nanoid`);

const {HttpResponse, STATUS_LIST} = require(`../http-response`);
const {FILENAME, validationParams} = require(`../../common`);
const {LoggerCenter, validationPropertyList} = require(`../../utils`);


const logger = LoggerCenter.getLogger();

class OfferAdapter {
  constructor() {
    try {
      this._list = JSON.parse(fs.readFileSync(FILENAME, `utf8`));
      logger.debug(`Offer adapter init`);
    } catch (error) {
      logger.error(`Can't read file ${FILENAME} ${error}`);
    }
  }

  getList() {
    if (this._list.length === 0) {
      return HttpResponse.noContent(`Offer list is empty`);
    }
    return HttpResponse.ok(this._list);
  }

  addItem(offerParams) {
    const validation = validationPropertyList(validationParams.requiredOfferPropertyList, offerParams);
    if (validation.status === STATUS_LIST.FAILED) {
      return HttpResponse.badRequest(validation.content);
    }
    const newOffer = {
      id: nanoid(),
      ...offerParams,
      comments: [],
    };
    this._list.push(newOffer);
    return HttpResponse.created(newOffer);
  }

  getItemById(offerId) {
    if (offerId === ``) {

      return HttpResponse.badRequest(`Offer id can't be empty`);
    }

    const currentOffer = this._list.find((offer) => offer.id === offerId);
    if (currentOffer === undefined) {
      return HttpResponse.notFound(`Offer with ${offerId} id doesn't exist`);
    }
    return HttpResponse.ok(currentOffer);
  }

  updateItemById(offerId, offerParams) {
    const validation = validationPropertyList(validationParams.requiredOfferPropertyList, offerParams);
    if (validation.status === STATUS_LIST.FAILED) {
      return HttpResponse.badRequest(validation.content);
    }
    const offerIndex = this._list.findIndex((offer) => offer.id === offerId);
    if (offerIndex === -1) {
      return HttpResponse.badRequest(`Offer with ${offerId} id doesn't exist`);
    }
    this._list[offerIndex] = {
      ...this._list[offerIndex],
      ...offerParams,
    };
    return HttpResponse.ok(this._list[offerIndex]);
  }

  deleteItemById(offerId) {
    const offerIndex = this._list.findIndex((offer) => offer.id === offerId);
    if (offerIndex === -1) {
      return HttpResponse.badRequest(`Offer with ${offerId} id doesn't exist`);
    }
    this._list.splice(offerIndex, 1);
    return HttpResponse.noContent(`Offer with ${offerId} id deleted`);
  }

  searchByTitle(searchedTitle) {
    if (this._list.length === 0) {
      return HttpResponse.noContent(`Offer list is empty`);
    }

    const loweredSearchedTitle = searchedTitle.toLowerCase();
    const filteredOfferList = this._list.filter((offer) => {
      const title = offer.title.toLowerCase();
      return title.match(loweredSearchedTitle);
    });

    if (this._list.length === 0) {
      return HttpResponse.notFound(`Not found`);
    }
    return HttpResponse.ok(filteredOfferList);
  }
}

module.exports = new OfferAdapter();
