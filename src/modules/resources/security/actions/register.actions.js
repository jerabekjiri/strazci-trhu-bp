export const REGISTER_STARTED = 'REGISTER_STARTED';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';

export const registerStarted = () => ({
  type: REGISTER_STARTED
})

export const registerSuccess = (payload) => ({
  type: REGISTER_SUCCESS,
  payload
})

export const registerFailed = (error) => ({
  type: REGISTER_FAILED,
  error
})
