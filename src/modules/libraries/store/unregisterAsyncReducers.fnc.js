
import * as R from 'ramda';
import { combineReducers } from 'redux';
import createReducer from './create-reducer';

export const unregisterAsyncReducers = (store) => {
  store.asyncReducers.ui = R.pick(store.staticReducers)(store.asyncReducers.ui);
  store.asyncReducers.entity = R.pick(store.staticReducers)(store.asyncReducers.entity);
  store.replaceReducer(combineReducers({
    ui: createReducer(store.asyncReducers.ui),
    entity: createReducer(store.asyncReducers.entity)
  }))
}