'use strict';

const {Router} = require(`express`);

const mock = require(`../../../../mock`);
const {adaptData} = require(`../../utils`);

const searchRouter = new Router();

searchRouter.get(`/`, (req, res) => {
    const ticketList = adaptData(mock);
    res.render(`search/search`, {
        title: `search`,
        description: `Страница поиска`,
        popularTicketListParams: {
            hiddenTitle: `Самые обсуждаемые предложения`,
            title: `Самые обсуждаемые`,
            ticketList,
        },
    });
});

module.exports = searchRouter;
