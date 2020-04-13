const {Router} = require(`express`);

const categoryRouter = new Router();

categoryRouter.get(`/`, (req, res) => res.send(`/offers/category`));
categoryRouter.get(`/:id`, (req, res) => res.send(`/offers/category/:id`));

module.exports = categoryRouter;
