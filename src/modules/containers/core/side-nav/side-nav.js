import { connect } from 'pwa-helpers/connect-mixin';
import { html } from '@polymer/polymer';

import { AbstractContainer } from '../../../shared/abstracts/abstract.container';
import { MODULES_CONFIG } from '../../../../application/application.config';
import { navigate, closeSidevNav, openSidevNav } from '../../../../application/application.actions';
import { store } from '../../../libraries/store/store';
import '../../../design-system/atoms/ag-main-menu-item/ag-main-menu-item';
import '../../../design-system/atoms/ag-icon-button/ag-icon-button';

import { sideNavState } from './side-nav.selectors';
import './side-nav.css';

export class SideNav extends connect(store)(AbstractContainer) {

  constructor() {
    super()
    this.menuConfig = MODULES_CONFIG;
  }

  stateChanged(state) {
    this.sideNavState = sideNavState(state);
  }

  static get template() {
    return html`
      <style include="side-nav-style"></style>
      <div class$="side-nav side-nav--{{_isSideNavOpened(sideNavState.sideNavOpened)}}">
        <div class$="side-nav__header--{{_isSideNavOpened(sideNavState.sideNavOpened)}}">
          <ag-icon-button icon$="[[_getSideNavIcon(sideNavState.sideNavOpened, isPhone)]]"
                          on-click="_toggleSideNav">
          </ag-icon-button>
        </div>
        <template is="dom-repeat" items="[[menuConfig]]">
          <div class="side-nav__nav-item">
            <ag-main-menu-item icon="[[item.icon]]"
                               disabled="[[_isDisabled(item.active)]]"
                               selected="[[_isActiveModule(item.type, sideNavState.module)]]"
                               compressed="[[!sideNavState.sideNavOpened]]"
                               on-click="_changeRoute">
              {{localize(item.type)}}
            </ag-main-menu-item>
          </div>
        </template>
      </div>
    `;
  }

  _isDisabled(active) {
    return active ? '' : '--disabled'
  }

  _isActiveModule(type, activeModule) {
    return type === activeModule;
  }

  _isSideNavOpened(sideNavOpened) {
    return sideNavOpened ? 'opened' : 'closed'
  }

  _getSideNavIcon(sideNavOpened, isPhone) {
    return sideNavOpened ? isPhone ? 'mg-navig:cross' : 'mg-navig:arrow-left' : 'mg-navig:burger-menu';
  }

  _toggleSideNav(e) {
    this.sideNavState.sideNavOpened ? store.dispatch(closeSidevNav()) : store.dispatch(openSidevNav());
  }

  _changeRoute(e) {
    if (e.model.item.active) {
      store.dispatch(navigate(e.model.item.route));
      if (!this.isDesktop) {
        store.dispatch(closeSidevNav());
      }
    }
  }
}

customElements.define('side-nav', SideNav);