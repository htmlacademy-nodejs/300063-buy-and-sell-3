'use strict';

const p = require(`path`);

// const {HttpResponse} = require(`../common`);


class FileAdapter {
  async download(file) {
    const {type, size, path, name} = file;
    const allowTypes = [`image/jpeg`, `image/png`];

    if (size === 0 || !allowTypes.includes(type)) {
      fs.unlink(path);
      return `bad request`;
      // return HttpResponse.badRequest(``);
    }
    try {
      await fs.rename(path, p.resolve(__dirname, `../public/img/avatars/${name}`));
    } catch (error) {
      return `\`Oops! Error: ${error.message}\``
      // return res.send(`Oops! Error: ${error.message}`);
    }
  }
}

module.exports = new FileAdapter();
