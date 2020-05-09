'use strict';

const Request = require(`./request`);

class CommentAdapter {
  async getList() {
    return await Request.get(`offers`);
    // const commentsRequestList = offerList.slice(0, 3).map(offer => Request.get(`offers/${offer.id}/comments`));
    // const commentsResponseList = await Promise.all(commentsRequestList);
    // return commentsResponseList.slice(0, 3).reduce(
    //   (acc, commentList) => commentList === 0 ? acc : [...acc, ...commentList],
    //   []
    // );
  }
}

module.exports = new CommentAdapter();
