import { createSelector } from 'reselect';

import * as R from 'ramda';

const _simulatorSelector = state => R.path(['entity', 'simulator'], state);

export const simulatorStateSelector = createSelector(
  _simulatorSelector,
  state => state
)
