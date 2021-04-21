import { createSelector } from 'reselect';

import * as R from 'ramda';

const _invitationSelector = state => R.path(['entity', 'invitation'], state);

export const invitationSelector = createSelector(
  _invitationSelector,
  state => state
)
