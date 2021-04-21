import { getSessionStorageParam } from '../../../utils/getStorageParam.fnc';

import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILED
} from '../actions/login.actions';
import {
  LOGOUT_STARTED,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED 
} from '../actions/logout.actions';
import {
  REGISTER_STARTED,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from '../actions/register.actions';

const INITIAL_STATE = {
  accessToken: getSessionStorageParam('accessToken'),
  refreshToken: getSessionStorageParam('refreshToken')
};

const securityResourceReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_STARTED:
    case LOGOUT_STARTED:
    case REGISTER_STARTED:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        error: null,
        isLoading: false
      }
    case LOGIN_FAILED:
      return {
        ...state,
        accessToken: null,
        refreshToken: null,
        error: action.error,
        isLoading: false
      }
    case LOGOUT_SUCCESS:
      return {
        error: null,
        isLoading: false
      }
    case LOGOUT_FAILED:
      return {
        error: null,
        isLoading: false
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false
      }
    case REGISTER_FAILED: 
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    default:
      return state
    }
}

export default securityResourceReducer;