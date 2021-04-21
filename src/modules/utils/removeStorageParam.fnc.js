import * as R from 'ramda';

export const removeStorageParam = (paramNames) =>
  R.map(
    paramName => localStorage.removeItem(paramName)
  )(paramNames)
