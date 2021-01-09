/* eslint-disable max-len */
/* eslint-disable camelcase */

const api_list = require('../api/index');

module.exports.createURL = (params, apiKey, query, originalUrl) => {
  const method = api_list[params.method];
  let URL = method.api;

  // check if required Steam Web API Dev key
  if (method.required.key !== false) {
    URL += apiKey;
  }

  // check if id required
  if (method.required.id !== false) {
    URL += method.id_name + params.id;
  }

  // check if appid required
  if (method.required.appid !== false) {
    URL += (method.appid_name + params.appid);
  }

  // check if query required and whether it exists
  if (method.required.query !== false) {
    // get query from url
    const get_query = originalUrl.split('?');
    if (get_query.length > 1) {
      // eslint-disable-next-line prefer-template
      URL += ('&' + get_query[1]);
    }
  }

  return URL;
};
