import * as R from 'ramda';

export const getActiveModule = (url) => {
  const activeModule = R.slice(2, 3, R.split('/', url))[0];
  return !!activeModule ? R.replace(/-/g, '_', activeModule) : !!activeModule;
}
