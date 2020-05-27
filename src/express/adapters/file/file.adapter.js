'use strict';

const path = require(`path`);
const fs = require(`fs`).promises;

const {DEFAULT_PUBLIC_DIR} = require(`../../common`);
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
      const publicDir = process.env.PUBLIC_DIR || DEFAULT_PUBLIC_DIR;
      const newFilePath = path.resolve(destination, `../${publicDir}/img/${filename}`);
      await fs.rename(filePath, newFilePath);
      return HttpResponse.ok(filename);
    } catch (error) {
      fs.unlink(filePath);
      return HttpResponse.internalServerError(`Internal server error ${error}`);
    }
  }
}

module.exports = new FileAdapter();
