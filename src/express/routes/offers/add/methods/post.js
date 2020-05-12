'use strict';

const fs = require(`fs`).promises;
const p = require(`path`);
const {OfferAdapter} = require(`../../../../adapters`);


module.exports = async (req, res) => {

  return res.send(`success`);
  // console.log(req.fields);
};
