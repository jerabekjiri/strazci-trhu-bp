import {
  LOAD_NOTIFICATIONS_INFO_STARTED,
  LOAD_NOTIFICATIONS_INFO_SUCCESS,
  LOAD_NOTIFICATIONS_INFO_FAILED
} from '../actions/load-notifications-info.actions';

const INITIAL_STATE = {};

const loadNotificationsInfoResourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_NOTIFICATIONS_INFO_STARTED:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case LOAD_NOTIFICATIONS_INFO_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      }
    case LOAD_NOTIFICATIONS_INFO_FAILED:
      return {
        ...state,
        data: 0,
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

export default loadNotificationsInfoResourceReducer;