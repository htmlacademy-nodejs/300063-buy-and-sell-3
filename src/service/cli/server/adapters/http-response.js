'use strict';

const HttpCodes = require(`../common/http-codes`);


const STATUS_LIST = {
  SUCCESS: `success`,
  FAILED: `failed`,
};

class HttpResponse {
  ok(content) {
    return {
      status: STATUS_LIST.SUCCESS,
      statusCode: HttpCodes.OK,
      content,
    };
  }

  notFound(content) {
    return {
      status: STATUS_LIST.FAILED,
      statusCode: HttpCodes.NOT_FOUND,
      content,
    };
  }

  badRequest(content) {
    return {
      status: STATUS_LIST.FAILED,
      statusCode: HttpCodes.BAD_REQUEST,
      content,
    };
  }

  noContent(content) {
    return {
      status: STATUS_LIST.SUCCESS,
      statusCode: HttpCodes.NO_CONTENT,
      content,
    };
  }

  created(content) {
    return {
      status: STATUS_LIST.SUCCESS,
      statusCode: HttpCodes.CREATED,
      content,
    };
  }
}

module.exports = {
  STATUS_LIST,
  HttpResponse: new HttpResponse(),
};
