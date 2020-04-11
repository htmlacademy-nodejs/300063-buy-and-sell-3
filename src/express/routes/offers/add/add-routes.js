const {Router} = require(`express`);

const addRouter = new Router();
addRouter.get('/', (req, res) => res.send(`/offers/add`));

module.exports = addRouter;
