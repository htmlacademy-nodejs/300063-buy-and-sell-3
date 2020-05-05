'use strict';

const request = require(`supertest`);
const server = require(`../main`);

describe(`Categories API end-points`, () => {
  test(`When GET categories status code should be 200`, async () => {
    const res = await request(server).get(`/api/categories`);
    expect(res.statusCode).toBe(200);
  });
});
