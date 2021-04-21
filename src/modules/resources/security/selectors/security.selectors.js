import { createSelector } from 'reselect';

import * as R from 'ramda';

const _securityResourceSelector = state => R.path(['entity', 'security'], state);

export const isLoggedInSelector = createSelector(
  _securityResourceSelector,
  ({ accessToken, refreshToken }) => {
    return !!accessToken && !!refreshToken
  }
)

export const loginFailedErrorSelector = createSelector(
  _securityResourceSelector,
  ({ error }) => error
)

export const registerFailedErrorSelector = createSelector(
  _securityResourceSelector,
  ({ error }) => error
)