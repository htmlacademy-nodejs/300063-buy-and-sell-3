'use strict';

module.exports = (index) => {
  index++;
  const number = index > 9 ? index : `0${index}`;
  return {
    name: `Имя Фамилия`,
    avatar: `avatar${number}`,
    extension: `jpg`,
  }
};
