'use strict';

const {Router} = require(`express`);

const {deleteComments, getComments, postComments} = require(`./comments`);


const apiComments = new Router({mergeParams: true});

apiComments.get(`/`, getComments);
apiComments.post(`/`, postComments);
apiComments.delete(`/:commentId`, deleteComments);

module.exports = apiComments;
