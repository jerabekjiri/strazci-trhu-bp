export const LOAD_NOTIFICATIONS_STARTED = 'LOAD_NOTIFICATIONS_STARTED';
export const LOAD_NOTIFICATIONS_SUCCESS = 'LOAD_NOTIFICATIONS_SUCCESS';
export const LOAD_NOTIFICATIONS_FAILED = 'LOAD_NOTIFICATIONS_FAILED';

export const loadNotificationsStarted = () => ({
  type: LOAD_NOTIFICATIONS_STARTED
})

export const loadNotificationsSuccess = (payload) => ({
  type: LOAD_NOTIFICATIONS_SUCCESS,
  payload
})

export const loadNotificationsFailed = (error) => ({
  type: LOAD_NOTIFICATIONS_FAILED,
  error
})

export const LOAD_MORE_NOTIFICATIONS_STARTED = 'LOAD_MORE_NOTIFICATIONS_STARTED';
export const LOAD_MORE_NOTIFICATIONS_SUCCESS = 'LOAD_MORE_NOTIFICATIONS_SUCCESS';
export const LOAD_MORE_NOTIFICATIONS_FAILED = 'LOAD_MORE_NOTIFICATIONS_FAILED';

export const loadMoreNotificationsStarted = () => ({
  type: LOAD_MORE_NOTIFICATIONS_STARTED
})

export const loadMoreNotificationsSuccess = (payload) => ({
  type: LOAD_MORE_NOTIFICATIONS_SUCCESS,
  payload
})

export const loadMoreNotificationsFailed = (error) => ({
  type: LOAD_MORE_NOTIFICATIONS_FAILED,
  error
})