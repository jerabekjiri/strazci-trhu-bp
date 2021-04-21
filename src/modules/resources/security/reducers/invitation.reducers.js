import {
  INVITATION_INIT,
  INVITATION_STARTED,
  INVITATION_SUCCESS,
  INVITATION_FAILED
} from '../actions/invitation.actions';

const invitationResourceReducer = (state = {}, action) => {
  switch(action.type) {
    case INVITATION_INIT:
      return {}
    case INVITATION_STARTED:
      return {
        ...state,
        data: null,
        error: null,
        isLoading: true
      }
    case INVITATION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
        isLoading: false
      }
    case INVITATION_FAILED:
      return {
        ...state,
        data: null,
        error: action.error,
        isLoading: false
      }
    default:
      return state
    }
}

export default invitationResourceReducer;