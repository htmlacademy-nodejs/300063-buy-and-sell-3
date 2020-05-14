'use strict';

const axios = require(`axios`);


class Request {
  constructor() {
    this._url = `${process.env.PROTOCOL}://${process.env.DOMAIN}:${process.env.SERVER_API_PORT}/api`;
  }

  _getErrorStatus(error) {
    return {
      status: `failed`,
      statusCode: error.response.status,
      content: error.response.data,
    };
  }

  async get(path) {
    return await axios.get(`${this._url}/${path}`)
      .then((res) => res.data)
      .catch(this._getErrorStatus);
  }

  async post(path, params) {
    return await axios.post(`${this._url}/${path}`, params)
      .then((res) => res.data)
      .catch(this._getErrorStatus);
  }

  async put(path, params) {
    return await axios.put(`${this._url}/${path}`, params)
      .then((res) => res.data)
      .catch(this._getErrorStatus);
  }
}

module.exports = new Request();
