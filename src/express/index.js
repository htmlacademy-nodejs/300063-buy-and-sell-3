'use strict';

const path = require(`path`);
const express = require(`express`);

const mainRouter = require(`./routes`);

const app = express();
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/`, mainRouter);
app.listen(+process.env.SERVER_PORT);
