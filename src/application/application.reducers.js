import * as R from 'ramda';

import { getActiveModule } from '../modules/utils/getActiveModule.fnc';
import { getActiveSubModule } from '../modules/utils/getActiveSubModule.fnc';

import {
  OPEN_SIDE_NAV,
  CLOSE_SIDE_NAV,
  OPEN_TOP_NAV,
  CLOSE_TOP_NAV,
  SAVE_NAVIGATE
} from './application.actions';
import { SIZES } from './application.config';

const INIT_STATE = {
  sideNavOpened: SIZES.isDesktop(),
  topNavOpened: false,//SIZES.isDesktop(),
  router: window.location.href,
  secured: R.contains('/secured', window.location.pathname),
  module: getActiveModule(window.location.pathname) ? getActiveModule(window.location.pathname).toUpperCase() : '',
  subModule: getActiveSubModule(window.location.pathname) ? getActiveSubModule(window.location.pathname).toUpperCase() : ''
}

const applicationReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case OPEN_SIDE_NAV:
    case CLOSE_SIDE_NAV:
      return {
        ...state,
        sideNavOpened: action.payload
      }
    case OPEN_TOP_NAV:
    case CLOSE_TOP_NAV:
      return {
        ...state,
        topNavOpened: action.payload
      }
    case SAVE_NAVIGATE:
      return {
        ...state,
        router: action.payload,
        secured: R.contains('/secured', action.payload),
        module: getActiveModule(action.payload).toUpperCase(),
        subModule: (getActiveSubModule(action.payload) || '').toUpperCase()
      }
    default:
      return state
  }
}

export default applicationReducer;
