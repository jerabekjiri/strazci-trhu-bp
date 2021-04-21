import '@polymer/iron-ajax/iron-request';

import { getSessionStorageParam } from './getStorageParam.fnc';
import { ResourcesConfig } from '../resources/resources.config';

export const createHttpRequest = (
  url,
  method,
  body,
  queryParams,
  handleAs,
  formDataParams
) => {

  if (queryParams && (Object.keys(queryParams).length != 0 && queryParams.constructor == Object)) {
    var i = 0;
    Object.keys(queryParams).forEach(function (key, index) {
        if ((queryParams[key] || queryParams[key] == 0) && i == 0) {
            url += '?';
            url += key + '=' + queryParams[key];
            i++;
        } else if ((queryParams[key]) || (queryParams[key] == 0)) {
            url += '&'
            url += key + '=' + queryParams[key];
        }
    });
  }

  let headers = { };

  let options = {
    url:        url,
    handleAs:   handleAs || 'json',
    method:     method,
    headers:    headers,
  };

  let token = getSessionStorageParam('accessToken');
  token && ResourcesConfig.publicEndPoints.indexOf(url.replace(MySuperApp.back_end_endpoint, '')) < 0
    ? headers['Authorization'] = token 
    : null;

  headers['Content-type'] = 'application/json';

  typeof body != "undefined" && body != null ? options.body = body : null;

  return options;
}