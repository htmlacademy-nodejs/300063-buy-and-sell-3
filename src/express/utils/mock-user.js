'use strict';

module.exports = (index) => {
  index++;
  return {
    name: `Имя Фамилия`,
    avatar: `avatar${index.toString().padStart(2, 0)}.jpg`,
  };
};
