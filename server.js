const express = require('express');
const request = require('request');

const app = express();

const port = 8080; // PORT
const STEAM_API_KEY = 'YOUR STEAM API KEY GO HERE';

// recommend use 'express' and 'request'
// steam api routers
require('./src/routers/steam-api-routers')(app, request, STEAM_API_KEY);

// do your own stuff
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
