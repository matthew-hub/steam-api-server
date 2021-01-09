module.exports = {
  /* ISteamNews */
  //  your-host/steam/GetNewsForApp/292030/?count=10&maxlength=500
  GetNewsForApp: {
    api: 'http://api.steampowered.com/ISteamNews/GetNewsForApp/v002/?',
    id_name: 'appid=',
    required: {
      key: false,
      id: true,
      appid: false,
      query: true
    }
  }
};
