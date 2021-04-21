export const LOGOUT_STARTED = 'LOGOUT_STARTED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

export const logoutStarted = () => ({
  type: LOGOUT_STARTED
})

export const logoutSuccess = (payload) => ({
  type: LOGOUT_SUCCESS,
  payload
})

export const logoutFailed = (error) => ({
  type: LOGOUT_FAILED,
  error
})