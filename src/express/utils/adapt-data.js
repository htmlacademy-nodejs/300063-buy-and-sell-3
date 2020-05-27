'use strict';

module.exports = (data) => {
  return [...data].map((ticket) => ({
    ...ticket,
    picture: {
      base: `img/${ticket.picture}`,
      retina: `img/${ticket.picture.replace(`.`, `@2x.`)} 2x`,
    },
    category: ticket.categoryList.map((category) => category.toUpperCase()).join(`, `),
  }));
};
