module.exports = {
  /* ISteamUser */
  // your-host/steam/GetPlayerSummaries/76561198119402590
  GetPlayerSummaries: {
    api: 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v002/?key=',
    id_name: '&steamids=',
    required: {
      key: true,
      id: true,
      appid: false,
      query: false
    }
    // key: true,
    // query: false

  },
  //  your-host/steam/ResolveVanityURL/mattname
  ResolveVanityURL: {
    api: 'http://api.steampowered.com/ISteamUser/ResolveVanityURL/v001/?key=',
    id_name: '&vanityurl=',
    required: {
      key: true,
      id: true,
      appid: false,
      query: false
    }
  },

  //  your-host/steam/GetPlayerBans/76561198119402590
  GetPlayerBans: {
    api: 'http://api.steampowered.com/ISteamUser/GetPlayerBans/v001/?key=',
    id_name: '&steamids=',
    required: {
      key: true,
      id: true,
      appid: false,
      query: false
    }
  },
  //  your-host/steam/GetFriendList/76561198119402590
  GetFriendList: {
    api: 'http://api.steampowered.com/ISteamUser/GetFriendList/v001/?key=',
    id_name: '&steamid=',
    required: {
      key: true,
      id: true,
      appid: false,
      query: true
    }
  }
};
