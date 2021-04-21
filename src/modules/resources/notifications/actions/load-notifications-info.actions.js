export const LOAD_NOTIFICATIONS_INFO_STARTED = 'LOAD_NOTIFICATIONS_INFO_STARTED';
export const LOAD_NOTIFICATIONS_INFO_SUCCESS = 'LOAD_NOTIFICATIONS_INFO_SUCCESS';
export const LOAD_NOTIFICATIONS_INFO_FAILED = 'LOAD_NOTIFICATIONS_INFO_FAILED';

export const loadNotificationsInfoStarted = () => ({
  type: LOAD_NOTIFICATIONS_INFO_STARTED
})

export const loadNotificationsInfoSuccess = (payload) => ({
  type: LOAD_NOTIFICATIONS_INFO_SUCCESS,
  payload
})

export const loadNotificationsInfoFailed = (error) => ({
  type: LOAD_NOTIFICATIONS_INFO_FAILED,
  error
})