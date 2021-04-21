import { navigate } from '../../../application/application.actions';
import { removeStorageParam } from '../../utils/removeStorageParam.fnc';
import { SecurityControllerApi } from '../../../api/SecurityControllerApi';
import { setSessionStorageParam } from '../../utils/setStorageParam.fnc';
import { unregisterAsyncReducers } from '../../libraries/store/unregisterAsyncReducers.fnc';

import {
  loginStarted,
  loginSuccess,
  loginFailed
} from './actions/login.actions';
import {
  logoutStarted,
  logoutSuccess,
  logoutFailed
} from './actions/logout.actions';
import {
  registerStarted,
  registerSuccess,
  registerFailed
} from './actions/register.actions';
import { 
  invitationStarted,
  invitationSuccess,
  invitationFailed
} from './actions/invitation.actions';

const api = new SecurityControllerApi('');

export const loginResource = (payload) => (dispatch) => {
  dispatch(loginStarted());
  api.login(payload).then(
    response => {
      setSessionStorageParam('accessToken', response.accessToken)
      setSessionStorageParam('refreshToken', response.refreshToken);
      dispatch(loginSuccess(response));
      dispatch(navigate('/secured/market/shop'));
    },
    error => dispatch(loginFailed(error))
  )
}

export const logoutResource = (store) => (dispatch) => {
  dispatch(logoutStarted());
  api.logout().then(
    () => {
      removeStorageParam(['accessToken', 'refreshToken']);
      //unregisterAsyncReducers(store);
      dispatch(logoutSuccess());
      dispatch(navigate('/public/login'));
    },
    error => {
      removeStorageParam(['accessToken', 'refreshToken']);
      dispatch(logoutFailed(error));
      dispatch(navigate('/public/login'));
    }
  )
}

export const registerResource = (registerDto, registrationToken) => (dispatch) => {
  dispatch(registerStarted());
  api.register(registerDto, registrationToken).then(
    response => {
      dispatch(registerSuccess(response));
      dispatch(loginResource({
        login: registerDto.email,
        password: registerDto.password
      }));
    },
    error => dispatch(registerFailed(error))
  )
}

export const validateRegistrationTokenResource = (payload) => {
  return api.validateRegistrationToken(payload);
}

export const invitationResource = (payload) => (dispatch) => {
  dispatch(invitationStarted());
  api.createInvitation(payload).then(
    () => dispatch(invitationSuccess(true)),
    (error) => dispatch(invitationFailed(error))
  )
}