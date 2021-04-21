export const PATCH_NOTIFICATION_AS_READ_STARTED = 'PATCH_NOTIFICATION_AS_READ_STARTED';
export const PATCH_NOTIFICATION_AS_READ_SUCCESS = 'PATCH_NOTIFICATION_AS_READ_SUCCESS';
export const PATCH_NOTIFICATION_AS_READ_FAILED = 'PATCH_NOTIFICATION_AS_READ_FAILED';

export const patchNotificationAsReadStarted = () => ({
  type: PATCH_NOTIFICATION_AS_READ_STARTED
})

export const patchNotificationAsReadSuccess = (payload) => ({
  type: PATCH_NOTIFICATION_AS_READ_SUCCESS,
  payload
})

export const patchNotificationAsReadFailed = () => ({
  type: PATCH_NOTIFICATION_AS_READ_FAILED,
  error
})