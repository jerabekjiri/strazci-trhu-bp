import { NotificationControllerApi } from '../../../api/NotificationControllerApi';

const notificationApi = new NotificationControllerApi('');

import {
  loadNotificationsInfoStarted,
  loadNotificationsInfoSuccess,
  loadNotificationsInfoFailed
} from './actions/load-notifications-info.actions';

export const loadNotificationsInfoResource = () => (dispatch) => {
  dispatch(loadNotificationsInfoStarted());
  notificationApi.getNotificationsInfo().then(
    response => dispatch(loadNotificationsInfoSuccess(response)),
    error => dispatch(loadNotificationsInfoFailed(error))
  )
}

import {
  loadNotificationsStarted,
  loadNotificationsSuccess,
  loadNotificationsFailed
} from './actions/load-notifications.actions';

export const loadNotificationsResource = (filter = { limit: 50, offset: 0 }) => (dispatch) => {
  dispatch(loadNotificationsStarted());
  notificationApi.getNotifications(filter.limit, filter.offset).then(
    response => dispatch(loadNotificationsSuccess(response)),
    error => loadNotificationsFailed(error)
  )
}

import {
  loadMoreNotificationsStarted,
  loadMoreNotificationsSuccess,
  loadMoreNotificationsFailed
} from './actions/load-notifications.actions';

export const loadMoreNotificationsResource = (filter) => (dispatch) => {
  dispatch(loadMoreNotificationsStarted());
  notificationApi.getNotifications(filter.limit, filter.offset).then(
    response => dispatch(loadMoreNotificationsSuccess(response)),
    error => loadMoreNotificationsFailed(error)
  )
}

import {
  patchNotificationAsReadStarted,
  patchNotificationAsReadSuccess,
  patchNotificationAsReadFailed
} from './actions/patch-notification-as-read.actions';

export const patchNotificationAsReadResource = (id, filter = { limit: 50, offset: 0 }) => (dispatch) => {
  dispatch(patchNotificationAsReadStarted());
  notificationApi.patchNotificationAsRead(id).then(
    response => {
      dispatch(patchNotificationAsReadSuccess(response));
      dispatch(loadNotificationsInfoResource());
      dispatch(loadNotificationsResource({ limit: filter.limit + filter.offset, offset: 0 }));
    },
    error => dispatch(patchNotificationAsReadFailed(error))
  )
}