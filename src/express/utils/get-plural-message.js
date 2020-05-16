'use strict';

const getPluralMessage = (messageObject, params) => {
  const {count} = params;
  const typeCount = getTypeCount(count);
  return insertParams(messageObject[typeCount], params);
};

const getTypeCount = (count) => {
  const restOfOneHundred = count % 100;
  const restOfTen = count % 10;

  const isOne = restOfTen === 1;
  if (isOne) {
    return `one`;
  }
  const isZero = restOfTen === 0;
  const isOtherOfHundred = restOfOneHundred >= 5 && restOfOneHundred < 21;
  const isOtherOfTen = restOfTen >= 5 && restOfTen < 10;
  if (isZero || isOtherOfHundred || isOtherOfTen) {
    return `other`;
  }
  return `few`;
};

const insertParams = (text, params) =>
  Object.keys(params).reduce((message, property) => {
    return message.replace(`#{${property}}`, params[property]);
  }, text);

module.exports = getPluralMessage;
