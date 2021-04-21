import { createSelector } from 'reselect';
import * as R from 'ramda';

const _notificationsResourceSelector = state => R.path(['entity', 'notifications'], state);
const _notificationsInfoResourceSelector = state => R.path(['entity', 'notificationsInfo'], state);

export const notificationsResourceSelector = createSelector(
  _notificationsResourceSelector,
  state => state
)

export const notificationsInfoResourceSelector = createSelector(
  _notificationsInfoResourceSelector,
  state => state
)