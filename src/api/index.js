const ISteamUser = require('./ISteamUser');
const ISteamUserStats = require('./ISteamUserStats');
const IPlayerService = require('./IPlayerService');
const ISteamNews = require('./ISteamNews');

module.exports = {
  ...ISteamUser,
  ...ISteamUserStats,
  ...IPlayerService,
  ...ISteamNews
};

// TODO: GetSteamLevel
// TODO: GetSteamGroup
