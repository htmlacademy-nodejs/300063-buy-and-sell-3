'use strict';

const request = require(`supertest`);

const {baseOfferParams} = require(`./params`);
const server = require(`../main`);
const {HttpCodes} = require(`../../common`);


const offerPropertyList = [
  `type`,
  `title`,
  `description`,
  `sum`,
  `picture`,
  `categoryList`,
];

describe(`Offers API end-points`, () => {
  test(`When GET offers status code should be ${HttpCodes.OK}`, async () => {
    const res = await request(server).get(`/api/offers`);
    expect(res.statusCode).toBe(HttpCodes.OK);
  });

  test(`When POST offers status code should be ${HttpCodes.CREATED}`, async () => {
    const res = await request(server).post(`/api/offers`).send(baseOfferParams);
    await request(server).delete(`/api/offers/${res.body.id}`);
    expect(res.statusCode).toBe(HttpCodes.CREATED);
  });

  // test(`When POST offer`)

  test.each(offerPropertyList)(`When POST offers without %p status code should be ${HttpCodes.BAD_REQUEST}`, async (property) => {
    const offerParams = {...baseOfferParams};
    delete offerParams[property];
    const res = await request(server).post(`/api/offers`).send();
    expect(res.statusCode).toBe(HttpCodes.BAD_REQUEST);
    await request(server).delete(`/api/offers/${res.body.id}`);
  });
});
