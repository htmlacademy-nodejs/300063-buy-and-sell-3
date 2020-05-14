'use strict';

const path = require(`path`);
const multer = require(`multer`);


const upload = (fieldName) => {
  const storage = multer.diskStorage({
    destination(req, file, cb) {
      cb(null, path.resolve(__dirname, `../temp/`))
    },
    filename(req, file, cb) {
      cb(null, `${+Date.now()}-${file.originalname}`)
    },
  });
  const temp = multer({storage});
  return temp.single(fieldName);
};

module.exports = upload;
