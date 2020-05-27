'use strict';

const path = require(`path`);
const express = require(`express`);

const {DEFAULT_PUBLIC_DIR, DEFAULT_PORT} = require(`./common`);
const mainRouter = require(`./routes`);
const {logger} = require(`./utils`);

const app = express();
app.use(logger.expressPinoLogger);

const publicDir = process.env.PUBLIC_DIR || DEFAULT_PUBLIC_DIR;
app.use(express.static(path.resolve(__dirname, publicDir)));

app.use(express.urlencoded({extended: false}));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/`, mainRouter);
const port = parseInt(process.env.SERVER_PORT, 10) || DEFAULT_PORT;
app.listen(port);
