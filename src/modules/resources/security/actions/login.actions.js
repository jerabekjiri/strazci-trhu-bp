export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const loginStarted = () => ({
  type: LOGIN_STARTED
})

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload
})

export const loginFailed = (error) => ({
  type: LOGIN_FAILED,
  error
})
