import { createHttpRequest } from '../../utils/createHttpRequest.fnc';
import { ErrorCodesEnum } from '../../enums/error-codes';
import { getSessionStorageParam } from '../../utils/getStorageParam.fnc';
import {
  loginFailed,
  loginSuccess
} from '../../resources/security/actions/login.actions';
import { navigate } from '../../../application/application.actions';
import { removeStorageParam } from '../../utils/removeStorageParam.fnc';
import { setSessionStorageParam } from '../../utils/setStorageParam.fnc';
import { store } from '../../libraries/store/store';

export class HttpRequest {

  getGatewayBaseUrl() {
    let url = MySuperApp.back_end_endpoint;
    return url;
  }

  gatewayRequest(url, method, body, queryParams, handleAs, formDataParams) {

    let request = document.createElement('iron-request');
    const options = createHttpRequest(url, method, body, queryParams, handleAs, formDataParams);

    let requestPromise = new Promise((resolve, reject) => {
      request.completes.then(
        request => {
          resolve(request.response);
        }
      ).catch(errorResponse => {
        if (url.includes('/logout')) {
          reject(request.response);
          return;
        }
        if (request.response && request.response.errorCode === ErrorCodesEnum.TOKEN_EXPIRED) {
          
          if (url.includes('/registration')) {
            reject(request.response);
            return;
          }

          refreshRequestPromise().then(
            response => {
              setSessionStorageParam('accessToken', response.accessToken)
              setSessionStorageParam('refreshToken', response.refreshToken);
              store.dispatch(loginSuccess(response));

              let reRequest = document.createElement('iron-request');
              reRequest.completes.then(
                reResult => resolve(reRequest.response),
                reError => reject(reRequest.response)
              )
              options.headers.Authorization = response.accessToken;
              reRequest.send(options);
            },
            error => logout(error)
          )
        } else if (request.response && request.response.errorCode === ErrorCodesEnum.TOKEN_MALFORMED) {
          logout(request.response);
        } else {
          reject(reject(request.response));
        }
      });
    });

    request.send(options);
    return requestPromise;
  }
}

const refreshRequestPromise = () => {
  return new Promise((resolve, reject) => {
    let refreshRequest = document.createElement('iron-request');
    let refreshOptions = createHttpRequest(
      MySuperApp.back_end_endpoint + '/security/login/extend', 'POST',
      { refreshToken: getSessionStorageParam('refreshToken') }
    );
    refreshRequest.completes.then(
      response => resolve(refreshRequest.response),
      error => reject(refreshRequest.response)
    );
    refreshRequest.send(refreshOptions);
  })
}

const logout = (error) => {
  removeStorageParam(['accessToken', 'refreshToken']);
  store.dispatch(loginFailed(error));
  store.dispatch(navigate('/public/login'));
}
