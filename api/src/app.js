const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(cors({ origin: '*' }));
app.use(morgan('dev'));
app.use(express.json());

app.use(router);

module.exports = app;
