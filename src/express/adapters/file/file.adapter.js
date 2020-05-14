'use strict';

const path = require(`path`);
const fs = require(`fs`).promises;
const {HttpResponse} = require(`../../../common`);


class FileAdapter {
  async download(file) {
    if (!file) {
      return HttpResponse.badRequest(`File doesn't have`);
    }
    const {mimetype, path: filePath, destination, filename, size} = file;
    const allowTypes = [`image/jpeg`, `image/png`];

    if (size === 0 || !allowTypes.includes(mimetype)) {
      fs.unlink(filePath);
      return HttpResponse.badRequest(`File can't be empty`);
    }
    try {
      const newFilePath = path.resolve(destination, `../${process.env.PUBLIC_DIR || `public`}/img/${filename}`);
      await fs.rename(filePath, newFilePath);
      return HttpResponse.ok(filename);
    } catch (error) {
      fs.unlink(filePath);
      return HttpResponse.internalServerError(`Internal server error ${error}`);
    }
  }
}

module.exports = new FileAdapter();
