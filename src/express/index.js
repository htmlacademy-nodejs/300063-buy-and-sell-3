'use strict';

const path = require(`path`);
const express = require(`express`);

const mainRouter = require(`./routes`);
const {logger} = require(`./utils`);


const app = express();
app.use(logger.expressPinoLogger);
app.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
app.use(express.urlencoded({extended: false}));

app.set(`views`, path.resolve(__dirname, `templates`));
app.set(`view engine`, `pug`);

app.use(`/`, mainRouter);
app.listen(+process.env.SERVER_PORT);
