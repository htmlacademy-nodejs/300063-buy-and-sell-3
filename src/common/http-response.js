'use strict';

const HttpCodes = require(`http-status-codes`);
const StatusList = require(`./status-list`);


class HttpResponse {
  ok(content) {
    return {
      status: StatusList.SUCCESS,
      statusCode: HttpCodes.OK,
      content,
    };
  }

  notFound(content) {
    return {
      status: StatusList.FAILED,
      statusCode: HttpCodes.NOT_FOUND,
      content,
    };
  }

  badRequest(content) {
    return {
      status: StatusList.FAILED,
      statusCode: HttpCodes.BAD_REQUEST,
      content,
    };
  }

  internalServerError(content) {
    return {
      status: StatusList.FAILED,
      statusCode: HttpCodes.INTERNAL_SERVER_ERROR,
      content,
    };
  }

  noContent(content) {
    return {
      status: StatusList.SUCCESS,
      statusCode: HttpCodes.NO_CONTENT,
      content,
    };
  }

  created(content) {
    return {
      status: StatusList.SUCCESS,
      statusCode: HttpCodes.CREATED,
      content,
    };
  }
}

module.exports = new HttpResponse();
