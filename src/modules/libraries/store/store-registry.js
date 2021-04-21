import { createStore, combineReducers } from 'redux';
import * as R from 'ramda';

import createReducer from './create-reducer';

export const configureStore = (initialState) => {
  const store = createStore(createReducer(), initialState);
  store.asyncReducers = {};
  store.staticReducers = [];
  return store;
}

export const injectUiAsyncReducer = (store, namespace, asyncReducer, isStatic = false) => {
  if (!store.asyncReducers.ui[namespace]) {
    resiterStaticReducer(store, isStatic, namespace);
    store.asyncReducers.ui[namespace] = asyncReducer;
    registerReducers(store);
  }
}

export const injectResourceAsyncReducer = (store, namespace, asyncReducer, isStatic = false) => {
  if (!store.asyncReducers.entity[namespace]) {
    resiterStaticReducer(store, isStatic, namespace);
    store.asyncReducers.entity[namespace] = asyncReducer;
    registerReducers(store);
  }
}

export const unregisterResourceAsyncReducer = (store, namespace) => {
  if (store.asyncReducers.entity[namespace]) {
    store.asyncReducers.entity = R.omit([namespace])(store.asyncReducers.entity);
    registerReducers(store);
  }
}

const registerReducers = (store) =>
  store.replaceReducer(combineReducers({
    ui: createReducer(store.asyncReducers.ui),
    entity: createReducer(store.asyncReducers.entity)
  }))

const resiterStaticReducer = (store, isStatic, namespace) => {
  if (isStatic && store && !store.staticReducers.find(val => val === namespace)) {
    store.staticReducers.push(namespace);
  }
}
