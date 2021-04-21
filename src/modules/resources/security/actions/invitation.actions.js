export const INVITATION_INIT = 'INVITATION_INIT';
export const INVITATION_STARTED = 'INVITATION_STARTED';
export const INVITATION_SUCCESS = 'INVITATION_SUCCESS';
export const INVITATION_FAILED = 'INVITATION_FAILED';

export const invitationInit = () => ({
  type: INVITATION_INIT
})

export const invitationStarted = () => ({
  type: INVITATION_STARTED
})

export const invitationSuccess = (payload) => ({
  type: INVITATION_SUCCESS,
  payload
})

export const invitationFailed = (error) => ({
  type: INVITATION_FAILED,
  error
})
