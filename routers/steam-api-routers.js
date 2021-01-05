/* eslint-disable camelcase */
module.exports = (app, request, key) => {
  // hold interface, methods etc. TODO: mby different approach ?
  const url_parts = {
    api: 'http://api.steampowered.com/',
    interfaces: ['ISteamUser/', 'ISteamUserStats/', 'IPlayerService/', 'ISteamNews/'],
    methods: [
      'GetPlayerSummaries/',
      'GetFriendList/',
      'GetPlayerAchievements/',
      'GetOwnedGames/',
      'GetRecentlyPlayedGames/',
      'GetUserStatsForGame/',
      'GetPlayerBans/',
      'IsPlayingSharedGame/',
      'GetNewsForApp/',
      'GetGlobalAchievementPercentagesForApp/',
      'GetSchemaForGame/',
      'GetGlobalStatsForGame/'
    ],
    vers: ['v001/', 'v002/'],
    key: `?key=${key}`
  };

  // use express middleware for cross-domain requests
  // access our server from our client browser,
  // give everyone or specific  domain
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // '*' = all  or http://your-domain
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  const getData = (url, req, res) => request.get(url, (error, steamHttpResponse, steamHttpBody) => {
    // once we get the body of the steamHttpResponse, send it to our client
    // as our own httpResponse
    res.setHeader('Content-Type', 'application/json');
    res.send(steamHttpBody);
  });

  // Example:
  // http://localhost:8080/steam/GetPlayerSummaries/76561198119402590
  // returns { basic profile information }
  app.get('/steam/GetPlayerSummaries/:steamid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[0]
      + url_parts.methods[0]
      + url_parts.vers[1]
      + url_parts.key}`;

    const url = `${add_parts}&steamids=${req.params.steamid}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetFriendList/76561198119402590
  // returns { friend list }
  app.get('/steam/GetFriendList/:steamid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[0]
      + url_parts.methods[1]
      + url_parts.vers[0]
      + url_parts.key}`;

    const url = `${add_parts}&steamid=${req.params.steamid}&relationship=friend`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetPlayerAchievements/76561198119402590/292030
  // returns { list of achievements }
  app.get('/steam/GetPlayerAchievements/:steamid/:appid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[1]
      + url_parts.methods[2]
      + url_parts.vers[0]
      + url_parts.key}`;

    const url = `${add_parts}&steamid=${req.params.steamid}&appid=${req.params.appid}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetOwnedGames/76561198119402590
  // returns { list of games player owns }
  app.get('/steam/GetOwnedGames/:steamid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[2]
      + url_parts.methods[3]
      + url_parts.vers[0]
      + url_parts.key}`;

    const url = `${add_parts}&steamid=${req.params.steamid}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetRecentlyPlayedGames/76561198119402590
  // returns { total_count, games played last two weeks }
  app.get('/steam/GetRecentlyPlayedGames/:steamid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[2]
      + url_parts.methods[4]
      + url_parts.vers[0]
      + url_parts.key}`;

    const url = `${add_parts}&steamid=${req.params.steamid}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetUserStatsForGame/76561198119402590/292030
  // returns { list of achievements, stats }
  app.get('/steam/GetUserStatsForGame/:steamid/:appid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[1]
      + url_parts.methods[5]
      + url_parts.vers[1]
      + url_parts.key}`;

    const url = `${add_parts}&steamid=${req.params.steamid}&appid=${req.params.appid}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetPlayerBans/76561198119402590
  // returns { players bans }
  app.get('/steam/GetPlayerBans/:steamid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
        + url_parts.interfaces[0]
        + url_parts.methods[6]
        + url_parts.vers[0]
        + url_parts.key}`;

    const url = `${add_parts}&steamids=${req.params.steamid}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/IsPlayingSharedGame/76561198119402590/292030
  // returns { lander steamid }
  app.get('/steam/IsPlayingSharedGame/:steamid/:appid_playing', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
          + url_parts.interfaces[2]
          + url_parts.methods[7]
          + url_parts.vers[0]
          + url_parts.key}`;

    const url = `${add_parts}&steamid=${req.params.steamid}&appid_playing=${req.params.appid_playing}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetNewsForApp/292030/?count=1&maxlength=300
  // returns { list of news, count of news }
  app.get('/steam/GetNewsForApp/:appid/', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[3]
      + url_parts.methods[8]
      + url_parts.vers[1]}`;

    const url = `${add_parts}?appid=${req.params.appid}&count=${req.query.count}&maxlength=${req.query.maxlength}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetGlobalAchievementPercentagesForApp/292030
  // returns { achievements name, percent }
  app.get('/steam/GetGlobalAchievementPercentagesForApp/:gameid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[1]
      + url_parts.methods[9]
      + url_parts.vers[1]}`;

    const url = `${add_parts}?gameid=${req.params.gameid}`;
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetSchemaForGame/292030
  // returns { gamename, gameversion and availablegamestats(achievements and stats name)}
  app.get('/steam/GetSchemaForGame/:appid', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[1]
      + url_parts.methods[10]
      + url_parts.vers[1]
      + url_parts.key}`;

    const url = `${add_parts}&appid=${req.params.appid}`;
    console.log('url', url);
    getData(url, req, res);
  });

  // Example:
  // http://localhost:8080/steam/GetGlobalStatsForGame/292030/?count=1&name=ha_ee
  // TIP: use GetSchemaForGame to get availablegamestats
  app.get('/steam/GetGlobalStatsForGame/:appid/', (req, res) => {
    // create the Steam API URL we want to use
    const add_parts = `${url_parts.api
      + url_parts.interfaces[1]
      + url_parts.methods[11]
      + url_parts.vers[0]}`;

    const url = `${add_parts}?appid=${req.params.appid}&count=${req.query.count}&name[0]=${req.query.name}`;
    console.log('url', url);
    getData(url, req, res);
  });

  //
};
