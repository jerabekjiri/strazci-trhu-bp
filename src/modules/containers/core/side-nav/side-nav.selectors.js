import * as R from 'ramda';

import { createSelector } from 'reselect';

const _sideNavState = state => R.path(['ui', 'application'], state);

export const sideNavState = createSelector(
  _sideNavState,
  ({ module, subModule, sideNavOpened }) => ({ module, subModule, sideNavOpened })
)