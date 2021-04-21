import { createSelector } from 'reselect';
import * as R from 'ramda';

const _applicationSelector = state => R.path(['ui', 'application'], state);

export const applicationSelector = createSelector(
  _applicationSelector,
  state => state
)

export const isSecuredApplication = createSelector(
  _applicationSelector,
  ({ secured }) => secured
)