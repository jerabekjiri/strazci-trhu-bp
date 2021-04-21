import { connect } from 'pwa-helpers/connect-mixin';
import { html } from '@polymer/polymer';
import { Router } from '@vaadin/router';
import '@polymer/polymer/lib/elements/dom-bind';
import '@polymer/polymer/lib/utils/unresolved';
import '@polymer/polymer/lib/utils/templatize';
import '@polymer/polymer/lib/legacy/polymer-fn';
import '@polymer/neon-animation/animations/scale-up-animation.js';
import '@polymer/neon-animation/animations/fade-out-animation.js';

import '../assets/icons/mg-skills-icon-palette';
import '../assets/icons/mg-navigation-icon-palette';
import '../assets/icons/mg-main-menu-icon-palette';
import '../assets/icons/mg-core-icon-palette';
import '../assets/icons/mg-game-icon-palette';
import '../assets/icons/mg-sub-menu-icon-palette';
import '../assets/icons/mg-core-tiny-icon-palette';
import '../assets/icons/mg-resource-icon-palette';

import { AbstractContainer } from '../modules/shared/abstracts/abstract.container';
import { gameStatusResource } from '../modules/resources/game-status/game-status-api.actions';
import { injectUiAsyncReducer, injectResourceAsyncReducer } from '../modules/libraries/store/store-registry';
import { isLoggedInSelector } from '../modules/resources/security/selectors/security.selectors';
import securityResourceReducer from '../modules/resources/security/reducers/security.reducers';
import { store } from '../modules/libraries/store/store';
import { WebsocketProvider } from '../modules/shared/providers/websocket.provider';
import { ModalsService } from '../modules/shared/services/modals.service';

import '../modules/containers/modals/base-modal';

import '../modules/containers/core/side-nav/side-nav';
import '../modules/containers/core/top-nav/top-nav';

import '../modules/design-system/styles/spacing.css';
import '../modules/design-system/styles/tooltip.css';
import '../modules/design-system/styles/scroll-bar.css';

import { closeSidevNav } from './application.actions';
import applicationReducer from './application.reducers';
import { APPLICATION_ROUTES } from './application-routing.config';
import { isSecuredApplication, applicationSelector } from './application.selectors';
import  MarketResourceReducer from '../modules/resources/market/reducers/market.reducers';
import { loginResource } from '../modules/resources/security/security-api.actions';

import './application.css';

export class ApplicationModule extends connect(store)(AbstractContainer) {

  constructor() {
    super();
    injectResourceAsyncReducer(store, 'security', securityResourceReducer, true);
    injectUiAsyncReducer(store, 'application', applicationReducer, true);
    this.modalService = new ModalsService(this);
  }

  stateChanged(state) {
    this.applicationState = applicationSelector(state);
    this.isSecured = isSecuredApplication(state);
    this.isLoggedIn = isLoggedInSelector(state);

    this.modalService.stateChanged(state);
  }

  connectedCallback() {
    super.connectedCallback();
    this._router = new Router(this.shadowRoot.querySelector('#application-routlet-outlet'));
    this._router.setRoutes(APPLICATION_ROUTES);

    const loginTest = {
      login: 'test@test.te',
      password: '9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'
    }
    store.dispatch(loginResource(loginTest));

  }

  static get observers() {
    return [
      '$isSecured(isSecured)',
    ]
  }

  $isSecured(secured) {
    if (secured) {
      //this.websocketProvider = new WebsocketProvider();
      store.dispatch(gameStatusResource());
      injectResourceAsyncReducer(store, 'market', MarketResourceReducer);
    }
  }

  static get template() {
    return html`
      <style include="application-style"></style>
      <style include="scroll-bar-style"></style>

      <div class="application">
        <template restamp is="dom-if" if="[[isSecured]]">
          <div class$="application__side-nav{{_isNavOpened(applicationState.sideNavOpened)}}">
            <side-nav></side-nav>
          </div>
          <template restamp is="dom-if" if="[[_hasMenuOverlay(isTablet, applicationState.sideNavOpened)]]">
            <div class="overlay" on-click="_onCloseSideMenu"></div>
          </template>
        </template>
        <div class="application__side-nav-content">
          <template restamp is="dom-if" if="[[isSecured]]">
            <top-nav></top-nav>
          </template>
          <div class="application__side-nav-content__content">
            <router-routlet class="application__side-nav-content__content__outlet" id="application-routlet-outlet"></router-routlet>
          </div>
        </div>
      </div>
    `;
  }

  _isNavOpened(navOpened) {
    return navOpened ? '' : '--closed';
  }

  _hasMenuOverlay(isTablet, sideNavOpened) {
    return isTablet && sideNavOpened;
  }

  _onCloseSideMenu() {
    store.dispatch(closeSidevNav());
  }
}

customElements.define('application-module', ApplicationModule);
