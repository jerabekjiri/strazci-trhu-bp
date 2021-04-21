import { createSelector } from 'reselect';
import * as R from 'ramda';

const _topNavSelector = state => R.path(['ui', 'application'], state);
export const topNavSelector = createSelector(
  _topNavSelector,
  ({ module, subModule, topNavOpened }) => ({ module, subModule, topNavOpened })
)