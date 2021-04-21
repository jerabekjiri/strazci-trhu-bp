import {
  GAME_STATUS_STARTED,
  GAME_STATUS_SUCCESS,
  GAME_STATUS_FAILED,
  SUBSTRACT_CURRENCY_GAME_STATUS
} from '../actions/game-status.actions';

const INITIAL_STATE = {};

const gameStatusResourceReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GAME_STATUS_STARTED:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case GAME_STATUS_SUCCESS:
      return {
        ...state,
        data: {
          ...action.payload
        },
        error: null,
        isLoading: false
      }
    case GAME_STATUS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false
      }
    case SUBSTRACT_CURRENCY_GAME_STATUS:
      return {
        ...state,
        data: { ...state.data, currency: (state.data.currency - action.currency) }
      }
    default:
      return state
  }
}

export default gameStatusResourceReducer;