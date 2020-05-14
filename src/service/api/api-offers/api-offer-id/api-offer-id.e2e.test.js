'use strict';

const request = require(`supertest`);
const HttpCodes = require(`http-status-codes`);

const server = require(`../../main`);
const {baseOfferParams} = require(`../params`);


const offerPropertyList = [
  `type`,
  `title`,
  `description`,
  `sum`,
  `picture`,
  `categoryList`,
];

describe(`Offer id API end-points`, () => {
  describe(`When GET offer id`, () => {
    let testOffer;
    beforeAll(async () => {
      const testOfferRes = await request(server).post(`/api/offers`).send(baseOfferParams);
      testOffer = testOfferRes.body;
    });

    afterAll(async () => {
      await request(server).delete(`/api/offers/${testOffer.id}`);
    });

    test(`status code should be ${HttpCodes.OK}`, async () => {
      const res = await request(server).get(`/api/offers/${testOffer.id}`);
      expect(res.statusCode).toBe(HttpCodes.OK);
    });

    test.each(offerPropertyList)(`should have %p property`, async (property) => {
      const res = await request(server).get(`/api/offers/${testOffer.id}`);
      expect(res.body).toHaveProperty(property);
    });
  });

  describe(`When PUT offer id`, () => {
    let testOffer;

    beforeEach(async () => {
      const testOfferRes = await request(server).post(`/api/offers`).send(baseOfferParams);
      testOffer = testOfferRes.body;
    });

    test(`status code should be ${HttpCodes.OK}`, async () => {
      const currentOffer = {...testOffer};
      const res = await request(server).put(`/api/offers/${currentOffer.id}`).send({
        ...baseOfferParams,
        type: `Продам`,
      });
      expect(res.statusCode).toBe(HttpCodes.OK);
      await request(server).delete(`/api/offers/${currentOffer.id}`);
    });

    test.each([
      [`type`, `Продам`],
      [`title`, `Новый заголовок`],
      [`description`, `Новое описание`],
      [`sum`, 10000],
      [`picture`, `Новое изображение`],
      [`categoryList`, [`Категория 4`, `Категория 5`, `Категория 6`]]
    ])(`%p property must change to %p`, async (property, propertyValue) => {
      const currentOffer = {...testOffer};
      const res = await request(server).put(`/api/offers/${currentOffer.id}`).send({
        ...baseOfferParams,
        [property]: propertyValue,
      });
      expect(res.body).toHaveProperty(property, propertyValue);
    });

    test(`without require property status code should be ${HttpCodes.BAD_REQUEST}`, async () => {
      const currentOffer = {...testOffer};
      const newParams = {...baseOfferParams};
      delete newParams.type;
      const res = await request(server).put(`/api/offers/${currentOffer.id}`).send(newParams);
      expect(res.statusCode).toBe(HttpCodes.BAD_REQUEST);
    });
  });

  describe(`When DELETE offer id`, () => {
    test(`status code should be ${HttpCodes.NO_CONTENT}`, async () => {
      const postRes = await request(server).post(`/api/offers`).send(baseOfferParams);
      const deleteRes = await request(server).delete(`/api/offers/${postRes.body.id}`);
      expect(deleteRes.statusCode).toBe(HttpCodes.NO_CONTENT);
    });

    test(`status code should be ${HttpCodes.BAD_REQUEST} if delete not exist offer`, async () => {
      const postRes = await request(server).post(`/api/offers`).send(baseOfferParams);
      await request(server).delete(`/api/offers/${postRes.body.id}`);
      const deleteRes = await request(server).delete(`/api/offers/${postRes.body.id}`);
      expect(deleteRes.statusCode).toBe(HttpCodes.BAD_REQUEST);
    });
  });
});
