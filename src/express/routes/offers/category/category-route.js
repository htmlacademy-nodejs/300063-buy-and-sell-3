'use strict';

const {Router} = require(`express`);

const mock = require(`../../../../../mock`);
const {adaptData} = require(`../../../utils`);

const categoryRouter = new Router();

categoryRouter.get(`/`, (req, res) => res.send(`/offers/category`));
categoryRouter.get(`/:id`, (req, res) => {
    const ticketList = adaptData(mock);
    res.render(`offers/category`, {
        title: `Offer category`,
        description: `Страница сформирована при помощи шаблонизатора Pug`,
        ticketListParams: {
            hiddenTitle: `Самые новые предложения`,
            title: `Электроника 62`,
            ticketList,
        },
    })
});

module.exports = categoryRouter;
