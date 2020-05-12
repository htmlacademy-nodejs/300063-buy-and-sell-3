'use strict';

const p = require(`path`);

const {HttpResponse} = require(`../../common`);


class FileAdapter {
  async download(file) {
    const {type, size, path, name} = file;
    const allowTypes = [`image/jpeg`, `image/png`];

    if (size === 0 || !allowTypes.includes(type)) {
      fs.unlink(path);
      return HttpResponse.badRequest(``);
    }
    try {
      await fs.rename(path, p.resolve(__dirname, `../../../../public/img/avatars/${name}`));
    } catch (error) {
      return res.send(`Oops! Error: ${error.message}`);
    }
  }
}

module.exports = new FileAdapter();
