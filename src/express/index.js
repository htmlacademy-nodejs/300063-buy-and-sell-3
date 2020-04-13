const express = require(`express`);

const mainRouter = require('./routes');

const app = express();
app.use(`/`, mainRouter);

const DEFAULT_PORT = 8080;
app.listen(DEFAULT_PORT);


