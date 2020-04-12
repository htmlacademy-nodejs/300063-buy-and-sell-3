const {Router} = require(`express`);

const mock = require(`../../../mock`);
const offersRouter = require(`./offers`);
const registerRouter = require(`./register`);
const loginRouter = require(`./login`);
const searchRouter = require(`./search`);
const myRouter = require(`./my`);

const mainRoute = new Router();

mainRoute.get(`/`, (req, res) => {
  const ticketList = mock.map(ticket => {
    return {
      ...ticket,
      type: ticket.type ===  `sale ` ? `ПРОДАМ ` : `КУПЛЮ`,
      picture: {
        base: `img/${ticket.picture}`,
        retina: `img/${ticket.picture.replace('.', '@2x.')} 2x`,
      },
      category: ticket.categoryList.map(category => category.toUpperCase()).join(', '),
    }
  });
  const pageContent = {
    title: `Main Page`,
    header: `Шаблонизатор в действии`,
    description: `Страница сформирована при помощи шаблонизатора Pug`,
    newTicketListParams: {
      hiddenTitle: 'Самые новые предложения',
      title: 'Самое свежее',
      ticketList: ticketList,
    },
    popularTicketListParams: {
      hiddenTitle: 'Самые обсуждаемые предложения',
      title: 'Самые обсуждаемые',
      ticketList: ticketList,
    },
  };
  res.render(`index`, pageContent);
});
mainRoute.use(`/offers`, offersRouter);
mainRoute.use(`/register`, registerRouter);
mainRoute.use(`/login`, loginRouter);
mainRoute.use(`/search`, searchRouter);
mainRoute.use(`/my`, myRouter);

module.exports = mainRoute;
