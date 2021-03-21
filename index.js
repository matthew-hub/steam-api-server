const express = require("express");
const request = require("request");

const app = express();

const port = 8080; // PORT
const STEAM_API_KEY = "77477B45984532B16B4D17249EE5C0EC";

// recommend use 'express' and 'request'
// steam api routers
require("./src/routers/steam-api-routers")(app, request, STEAM_API_KEY);

// do your own stuff
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`);
});
