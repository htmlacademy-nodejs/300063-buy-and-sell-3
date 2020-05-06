'use strict';

const HttpCode = require(`../http-codes`);


const STATUS_LIST = {
  SUCCESS: `success`,
  FAILED: `failed`,
};

class HttpResponse {
  ok(content) {
    return {
      status: STATUS_LIST.SUCCESS,
      statusCode: HttpCode.OK,
      content,
    };
  }

  notFound(content) {
    return {
      status: STATUS_LIST.FAILED,
      statusCode: HttpCode.NOT_FOUND,
      content,
    };
  }

  badRequest(content) {
    return {
      status: STATUS_LIST.FAILED,
      statusCode: HttpCode.BAD_REQUEST,
      content,
    };
  }

  noContent(content) {
    return {
      status: STATUS_LIST.SUCCESS,
      statusCode: HttpCode.NO_CONTENT,
      content,
    };
  }

  created(content) {
    return {
      status: STATUS_LIST.SUCCESS,
      statusCode: HttpCode.CREATED,
      content,
    };
  }
}

module.exports = {
  STATUS_LIST,
  HttpResponse: new HttpResponse(),
};
