'use strict';

const request = require(`supertest`);

const {offerPropertyList, baseOfferParams} = require(`./params`);
const server = require(`../main`);
const HttpCode = require(`../../http-codes`);

describe(`Offers API end-points`, () => {
  test(`When GET offers status code should be ${HttpCode.OK}`, async () => {
    const res = await request(server).get(`/api/offers`);
    expect(res.statusCode).toBe(HttpCode.OK);
  });

  test(`When POST offers status code should be ${HttpCode.CREATED}`, async () => {
    const res = await request(server).post(`/api/offers`).send(baseOfferParams);
    await request(server).delete(`/api/offers/${res.body.id}`);
    expect(res.statusCode).toBe(HttpCode.CREATED);
  });

  // test(`When POST offer`)

  test.each(offerPropertyList)(`When POST offers without %p status code should be ${HttpCode.BAD_REQUEST}`, async (property) => {
    const offerParams = {...baseOfferParams};
    delete offerParams[property];
    const res = await request(server).post(`/api/offers`).send();
    expect(res.statusCode).toBe(HttpCode.BAD_REQUEST);
    await request(server).delete(`/api/offers/${res.body.id}`);
  });
});
