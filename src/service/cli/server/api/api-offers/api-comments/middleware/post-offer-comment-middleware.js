const {validationPropertyList} = require(`../../../../common`);

module.exports = (req, res, next) => {
  const isValid = validationPropertyList({
    req,
    res,
    method: `POST`,
    requiredPropertyList: [`text`],
    regExpUrl: new RegExp(`/offers/[a-z0-9\-_]+/comments$`, `igm`),
  });
  if (isValid) {
    return next();
  }
};
