const express = require("express");
const request = require("request");

const app = express();

const port = 5000 ; // PORT
const STEAM_API_KEY = process.env.STEAM_API_KEY;

// recommend use 'express' and 'request'
// steam api routers
require("./src/routers/steam-api-routers")(app, request, STEAM_API_KEY);

// do your own stuff
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT || port);
