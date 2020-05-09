'use strict';

const request = require(`request-promise-native`);


class Request {
  constructor() {
    this._url = `${process.env.PROTOCOL}://${process.env.DOMAIN}:${process.env.SERVER_API_PORT}/api/`;
  }

  async get(path) {
    return await request(`${this._url}${path}`, {json: true});
  }

  async post(path, params) {
    const json = JSON.stringify(params);
    return request.post(`${this._url}${path}`, {json});
  }
}

module.exports = new Request();
