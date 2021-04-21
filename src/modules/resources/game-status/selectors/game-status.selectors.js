import { createSelector } from 'reselect';
import * as R from 'ramda';

const _gameStatusResourceSelector = state => R.path(['entity', 'gameStatus'], state);

export const gameStatusStateSelector = createSelector(
  _gameStatusResourceSelector,
  state => state
)

export const playerStateSelector = createSelector(
  _gameStatusResourceSelector,
  ({ data }) => data
)
