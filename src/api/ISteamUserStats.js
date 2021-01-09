module.exports = {
  /* ISteamUserStats */
  //  your-host/steam/GetSchemaForGame/292030
  GetSchemaForGame: {
    api: 'http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v002/?key=',
    id_name: '&appid=',
    required: {
      key: true,
      id: true,
      appid: false,
      query: false
    }
  },
  //  your-host/steam/GetGlobalStatsForGame/292030/?count=1&name[0]=ha_ee
  GetGlobalStatsForGame: {
    api: 'http://api.steampowered.com/ISteamUserStats/GetGlobalStatsForGame/v001/?',
    id_name: 'appid=',
    required: {
      key: false,
      id: true,
      appid: false,
      query: true
    }
  },

  //  your-host/steam/GetPlayerAchievements/76561198119402590/292030
  GetPlayerAchievements: {
    api: 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v001/?key=',
    id_name: '&steamid=',
    appid_name: '&appid=',
    required: {
      key: true,
      id: true,
      appid: true,
      query: false
    }
  },

  //  your-host/steam/GetGlobalAchievementPercentagesForApp/292030
  GetGlobalAchievementPercentagesForApp: {
    api: 'http://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v002/?',
    id_name: 'gameid=',
    required: {
      key: false,
      id: true,
      appid: false,
      query: false
    }
  },

  //  your-host/steam/GetUserStatsForGame/76561198119402590/292030
  GetUserStatsForGame: {
    api: 'http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v002/?key=',
    id_name: '&steamid=',
    appid_name: '&appid=',
    required: {
      key: true,
      id: true,
      appid: true,
      query: false
    }
  }
};
