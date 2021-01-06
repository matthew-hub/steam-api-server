# Steam API Server

This is a NodeJS server that makes it easy to use Steam Web API.  
It allows to get data from the API to client side.  
I.E allows Cross Origin Resource Sharing  

## Cross Origin Resource Sharing
>(CORS) is an HTTP-header based mechanism that allows a server to indicate any other origins (domain, scheme, or port) than its own from which a browser should permit loading of resources

## Installation the Steam API Server
```console
  git clone https://github.come/matthew-hub/steam-api-serve.git
```
####  In the project directory run:
```console 
  npm install
```
```console
  node server.js
```
## How to Use the Server?
1. Install the Server with NodeJS
2. Get a Steam Web API developer key. [Get one here.](https://steamcommunity.com/dev/apikey)
3. Read the Steam Web API documentation. [Doc.](https://developer.valvesoftware.com/wiki/Steam_Web_API)
4. Once you have the key, copy it to the file 'server.js'
```javascript
// server.js
const express = require('express');
const request = require('request');

const app = express();

const port = 8080; // PORT
const STEAM_API_KEY = 'YOUR STEAM WEB API KEY';
```
5. All API calls are located in the `"Routers"` folder. Same as below.
6. It's similar to the Steam Web API, you only use methods and parameters, see below.
7. Create request on client side.

### Request URL format
Steam API Server request:  
`https://{base_url}/steam/{method}/{parameters}`  
Sample:  
`http://locahost:8080/steam/GetPlayerSummaries/76561198119402590`
### Compared to
Steam Web API request:  
`https://{base_url}/{interface}/{method}/{version}?{parameters}`  
Sample:  
`http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=1234567890&steamids=000123000456`

## Example of Usage
```javascript
// yur code..
// steam_id
const steam_id = '76561198119402590';
// app_id 
const app_id ='292030'
// create the Steam API URL we want to use
const url = `http://localhost:8080/steam/GetPlayerAchievements/${steam_id}/${app_id}`;

fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log('[DATA]:', data);
  })
```

## List of API CALLS
Player:
- `'/steam/GetPlayerSummaries/steamid'`

- `'/steam/GetFriendList/steamid'`
- `'/steam/GetPlayerAchievements/steamid/appid'`
- `'/steam/GetOwnedGames/steamid'`
- `'/steam/GetRecentlyPlayedGames/steamid'`
- `'/steam/GetUserStatsForGame/steamid/:appid'`
- `'/steam/GetPlayerBans/steamid'`
- `'/steam/IsPlayingSharedGame/steamid/appid_playing'`

App:
- `'/steam/GetNewsForApp/appid/?count=10&maxlength=300'`

- `'/steam/GetGlobalAchievementPercentagesForApp/gameid'`
- `'/steam/GetSchemaForGame/appid'`
- `'/steam/GetGlobalStatsForGame/appid/?count=1&name='avaiablegamestats'`  
#####  [*] TIP: use GetSchemaForGame to get availablegamestats

## License
[MIT](https://github.com/matthew-hub/steam-api-server/blob/main/LICENSE)  ©  Feel free to make any changes.