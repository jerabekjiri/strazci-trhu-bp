import {
  LOAD_NOTIFICATIONS_STARTED,
  LOAD_NOTIFICATIONS_FAILED,
  LOAD_NOTIFICATIONS_SUCCESS,
  LOAD_MORE_NOTIFICATIONS_STARTED,
  LOAD_MORE_NOTIFICATIONS_SUCCESS,
  LOAD_MORE_NOTIFICATIONS_FAILED
} from '../actions/load-notifications.actions';

const INITIAL_STATE = {};

const loadNotificationsReourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_NOTIFICATIONS_STARTED:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case LOAD_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      }
    case LOAD_NOTIFICATIONS_FAILED:
      return {
        ...state,
        data: [],
        error: action.error,
        isLoading: false
      }
    case LOAD_MORE_NOTIFICATIONS_STARTED:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case LOAD_MORE_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        data: [
          ...(state.data || []),
          ...action.payload
        ],
        error: null,
        isLoading: false
      }
    case LOAD_MORE_NOTIFICATIONS_FAILED:
      return {
        ...state,
        data: [],
        error: action.error,
        isLoading: false
      }
    default:
      return state
  }
}

export default loadNotificationsReourceReducer;