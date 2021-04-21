import { Router } from '@vaadin/router';

export const OPEN_SIDE_NAV = 'OPEN_SIDE_NAV';
export const CLOSE_SIDE_NAV = 'CLOSE_SIDE_NAV';
export const OPEN_TOP_NAV = 'OPEN_TOP_NAV';
export const CLOSE_TOP_NAV = 'CLOSE_TOP_NAV';
export const SAVE_NAVIGATE = "SAVE_NAVIGATE";

export const openSidevNav = () => ({
  type: OPEN_SIDE_NAV,
  payload: true
})

export const closeSidevNav = () => ({
  type: CLOSE_SIDE_NAV,
  payload: false
})

export const openTopNav = () => ({
  type: OPEN_TOP_NAV,
  payload: true
})

export const closeTopNav = () => ({
  type: CLOSE_TOP_NAV,
  payload: false
})

export const saveNavigate = (payload) => ({
  type: SAVE_NAVIGATE,
  payload
})

export const navigate = (payload, active = true) => (dispatch) => {
  if (active) {
    Router.go(payload);
  }
  dispatch(saveNavigate(payload));
}