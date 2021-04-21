import { getSessionStorageParam } from './getStorageParam.fnc';

export const getFromToken = (param) => 
  (parseJwt(getSessionStorageParam('accessToken') || {}))[param]

const parseJwt = (token) => {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
};