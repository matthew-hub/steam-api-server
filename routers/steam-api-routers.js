/* eslint-disable camelcase */
module.exports = (app, request, key) => {
  // hold interface, methods etc. TODO: mby different approach ?
  const url_parts = {
    api: 'http://api.steampowered.com/',
    interfaces: ['ISteamUser/', 'ISteamUserStats/'],
    methods: ['GetPlayerSummaries/', 'GetFriendList/', 'GetPlayerAchievements/'],
    vers: ['v001/', 'v002/'],
    key: `?key=${key}`
  };

  // use express middleware fot cross-domain requests
  // access our server from our client browser,
  // give everyone or specific url
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8081'); // '*' = all  or http://url
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  app.get('/steam/user/:steamid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[0]
      + url_parts.methods[0]
      + url_parts.vers[1]
      + url_parts.key}`;

    const url = `${add_parts}&steamids=${req.params.steamid}`;

    request.get(url, (error, steamHttpResponse, steamHttpBody) => {
      // once we get the body of the steamHttpResponse, send it to our client
      // as our own httpResponse
      res.setHeader('Content-Type', 'application/json');
      res.send(steamHttpBody);
    });
  });
};
