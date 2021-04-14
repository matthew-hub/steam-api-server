
const { createURL } = require('../utils/create-api-url');

module.exports = (app, request, apikey) => {
  // use express middleware for cross-domain requests
  // access our server from our client browser,
  // give access everyone or specific  domain
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' = all  or http://your-domain
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/steam/:method/:id/', (req, res) => {
    // create the Steam API URL we want to use
    const url = createURL(req.params, apikey, req.query, req.originalUrl);

    request.get(url, (error, steamHttpResponse) => {
      if (error) {
        return res.send(error.code);
      }
      // once we get the body of the steamHttpResponse, send it to our client
      res.setHeader('Content-Type', 'application/json');
      res.send(steamHttpResponse.body);
    });
  });

  app.get('/steam/:method/:id/:appid/', (req, res) => {
    // create the Steam API URL we want to use
    const url = createURL(req.params, apikey, req.query, req.originalUrl);

    request.get(url, (error, steamHttpResponse) => {
      if (error) {
        return res.send(error.code);
      }
      // once we get the body of the steamHttpResponse, send it to our client
      res.setHeader('Content-Type', 'application/json');
      res.send(steamHttpResponse.body);
    });
    console.log('url_part', url);
  });
};
