'use strict';

const request = require(`supertest`);
const server = require(`../main`);
const HttpCode = require(`../../http-codes`);

describe(`Offers API end-points`, () => {
  test(`When GET offers status code should be ${HttpCode.OK}`, async () => {
    const res = await request(server).get(`/api/offers`);
    expect(res.statusCode).toBe(HttpCode.OK);
  });

  test(`When POST offers status code should be ${HttpCode.CREATED}`, async () => {
    const res = await request(server).post(`/api/offers`).send({
      "type": "Куплю",
      "title": "Заголовок",
      "description": "Описание",
      "sum": 40000,
      "picture": "Картинка",
      "categoryList": ["Категория 1", "Категория 2", "Категория 3"]
    });
    await request(server).delete(`/api/offers/${res.body.id}`);
    expect(res.statusCode).toBe(HttpCode.CREATED);
  });

  test(`When POST offers without title status code should be ${HttpCode.BAD_REQUEST}`, async () => {
    const res = await request(server).post(`/api/offers`).send();
    expect(res.statusCode).toBe(HttpCode.BAD_REQUEST);
    await request(server).delete(`/api/offers/${res.body.id}`);
  });
});
