'use strict';

const request = require(`supertest`);
const server = require(`../main`);
const HttpCodes = require(`../../common/http-codes`);


describe(`Categories API end-points`, () => {
  test(`When GET categories status code should be ${HttpCodes.OK}`, async () => {
    const res = await request(server).get(`/api/categories`);
    expect(res.statusCode).toBe(HttpCodes.OK);
  });
});
