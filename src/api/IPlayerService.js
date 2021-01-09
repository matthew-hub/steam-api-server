module.exports = {
  /* IPlayerService */
  //  your-host/steam/GetOwnedGames/76561198119402590
  GetOwnedGames: {
    api: 'http://api.steampowered.com/IPlayerService/GetOwnedGames/v001/?key=',
    key: true,
    id_name: '&steamid=',
    required: {
      key: true,
      id: true,
      appid: false,
      query: false
    }
  },

  //  your-host/steam/GetRecentlyPlayedGames/76561198119402590
  GetRecentlyPlayedGames: {
    api: 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v001/?key=',
    key: true,
    id_name: '&steamid=',
    required: {
      key: true,
      id: true,
      appid: false,
      query: false
    }
  },

  //  your-host/steam/IsPlayingSharedGame/76561198119402590/292030
  IsPlayingSharedGame: {
    api: 'http://api.steampowered.com/IPlayerService/IsPlayingSharedGame/v001/?key=',
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
