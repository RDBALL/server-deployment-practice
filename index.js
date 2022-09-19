'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

console.log('The server is up and running');

const app = express();

app.get('*', (req, res, next) => {
  res.send('This works as a catch all for any route');
});

app.listen(3002);
