'use strict';

const path = require(`path`);
const express = require(`express`);

const params = require(`./params`);
const mainRouter = require(`./routes`);

const app = express();
app.use(express.static(path.resolve(__dirname, params.PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/`, mainRouter);
app.listen(params.DEFAULT_PORT);


