'use strict';

const request = require(`supertest`);
const HttpCodes = require(`http-status-codes`);

const {baseOfferParams} = require(`../../params`);
const server = require(`../../../main`);


describe(`Offer comments API end-points`, () => {
  let testOffer;

  beforeEach(async () => {
    const res = await request(server).post(`/api/offers`).send(baseOfferParams);
    testOffer = res.body;
  });

  afterEach(async () => {
    await request(server).delete(`/api/offers/${testOffer.id}`);
  });

  test(`When GET offer comments status code should be ${HttpCodes.OK}`, async () => {
    const offer = {...testOffer};
    const res = await request(server).get(`/api/offers/${offer.id}/comments`);
    expect(res.statusCode).toBe(HttpCodes.OK);
  });

  test(`When POST offer comments status code should be ${HttpCodes.CREATED}`, async () => {
    const offer = {...testOffer};
    const res = await request(server).post(`/api/offers/${offer.id}/comments`).send({
      text: `Comment text`,
    });
    expect(res.statusCode).toBe(HttpCodes.CREATED);
    await request(server).delete(`/api/offers/${offer.id}/comments/${res.body.id}`);
  });

  test(`When POST offer comment text should be correct`, async () => {
    const offer = {...testOffer};
    const text = `Comment text ${new Date()}`;
    const res = await request(server).post(`/api/offers/${offer.id}/comments`).send({text});
    expect(res.body).toHaveProperty(`text`, text);
    await request(server).delete(`/api/offers/${offer.id}/comments/${res.body.id}`);
  });

  test.each([`id`, `text`])(`When POST offer comments should has %p`, async (property) => {
    const offer = {...testOffer};
    const res = await request(server).post(`/api/offers/${offer.id}/comments`).send({
      text: `Comment text`,
    });
    expect(res.body).toHaveProperty(property);
    await request(server).delete(`/api/offers/${offer.id}/comments/${res.body.id}`);
  });

  test(`When DELETE offer comment status code should be ${HttpCodes.NO_CONTENT}`, async () => {
    const offer = {...testOffer};
    const postRes = await request(server).post(`/api/offers/${offer.id}/comments`).send({
      text: `Comment text`,
    });
    const deleteRes = await request(server).delete(`/api/offers/${offer.id}/comments/${postRes.body.id}`);
    expect(deleteRes.statusCode).toBe(HttpCodes.NO_CONTENT);
  });

  test(`When DELETE offer comment status code should be ${HttpCodes.BAD_REQUEST} if not exist comment delete`, async () => {
    const offer = {...testOffer};
    const postRes = await request(server).post(`/api/offers/${offer.id}/comments`).send({
      text: `Comment text`,
    });
    await request(server).delete(`/api/offers/${offer.id}/comments/${postRes.body.id}`);
    const deleteRes = await request(server).delete(`/api/offers/${offer.id}/comments/${postRes.body.id}`);
    expect(deleteRes.statusCode).toBe(HttpCodes.BAD_REQUEST);
  });
});
