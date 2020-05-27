'use strict';

const request = require(`supertest`);
const HttpCodes = require(`http-status-codes`);

const {baseOfferParams} = require(`../api-offers/params`);
const server = require(`../main`);


describe(`Search API end-points`, () => {
  let testOffer;
  const testTitle = `Test title`;

  beforeAll(async () => {
    const res = await request(server).post(`/api/offers`).send({
      ...baseOfferParams,
      title: testTitle,
    });
    testOffer = res.body;
  });

  afterAll(async () => {
    await request(server).delete(`/api/offers/${testOffer.id}`);
  });

  test(`When GET searched offers status code should be ${HttpCodes.OK}`, async () => {
    const res = await request(server).get(encodeURI (`/api/search?title=${testTitle}`));
    expect(res.statusCode).toBe(HttpCodes.OK);
  });

  test(`When GET searched offers title upper or lower cases status code should be ${HttpCodes.OK}`, async () => {
    const upperTestTitle = testTitle.toUpperCase();
    const resForUpperTitle = await request(server).get(encodeURI (`/api/search?title=${upperTestTitle}`));
    expect(resForUpperTitle.statusCode).toBe(HttpCodes.OK);

    const lowerTestTitle = testTitle.toLowerCase();
    const resForLowerTitle = await request(server).get(encodeURI (`/api/search?title=${lowerTestTitle}`));
    expect(resForLowerTitle.statusCode).toBe(HttpCodes.OK);
  });
});
