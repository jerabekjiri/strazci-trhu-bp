import * as R from 'ramda';

export const getActiveSubModule = (url) => {
  const activeModule = R.slice(3, 4, R.split('/', url))[0];
  return !!activeModule ? R.replace(/-/g, '_', activeModule) : !!activeModule;
}
