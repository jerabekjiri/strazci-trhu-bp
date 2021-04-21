import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';

import { MODULES_CONFIG } from '../../../../application/application.config';
import { AbstractContainer } from '../../../shared/abstracts/abstract.container';
import { store } from '../../../libraries/store/store';
import { logoutResource } from '../../../resources/security/security-api.actions';
import {
  navigate,
  openSidevNav,
  openTopNav,
  closeTopNav,
} from '../../../../application/application.actions';
import { gameStatusStateSelector } from '../../../resources/game-status/selectors/game-status.selectors';
import { injectResourceAsyncReducer } from '../../../libraries/store/store-registry';
import gameStatusResourceReducer from '../../../resources/game-status/reducers/game-status.reducers';
import { ModalsEnum } from '../../../enums/modals';

import { topNavSelector } from './top-nav.selectors';

import '../../../shared/atoms/ag-border-box';
import '../../../ui/core/top-game-status/top-game-status';
import '../../../ui/core/player-profile/player-profile';
import '../../../design-system/atoms/ag-horizontal-menu-item/ag-horizontal-menu-item';
import '../../../design-system/atoms/ag-icon/ag-icon';
import '../../../design-system/atoms/ag-icon-button/ag-icon-button';
import '../../../design-system/atoms/ag-dropdown-option/ag-dropdown-option';

import '../notifications-dropdown/notifications-dropdown';
import './top-nav.css';

export class TopNav extends connect(store)(AbstractContainer) {

  constructor() {
    super();
    this.menuConfig = MODULES_CONFIG;
    injectResourceAsyncReducer(store, 'gameStatus', gameStatusResourceReducer);
  }

  stateChanged(state) {
    this.gameStatusState = gameStatusStateSelector(state);
    this.topNavState = topNavSelector(state);

    this.containerHandlers = { topNav: this.gameStatusState }
  }

  static get template() {
    return html`
      <style include="top-nav-style"></style>
      <style include="scroll-bar-style"></style>
      <div class$="top-nav top-nav{{_isNavOpened(topNavState.topNavOpened, isPhone)}}">

        <!-- INFORMATION TOP BAR -->
        <div class="top-nav__bar">
          
          <div id="topNavContainerHandler" 
               class="top-nav__bar__left-content">
            <template is="dom-if" if="[[isTablet]]">
              <div class="top-nav__bar__left-content__title">
                <ag-icon-button icon="mg-navig:burger-menu"
                                on-click="_toggleSideNav">
                </ag-icon-button>
              </div>
            </template>
            <template is="dom-if" if="[[!isPhone]]">
              <top-game-status data="[[gameStatusState.data]]">
              </top-game-status>
            </template>
            <template is="dom-if" if="[[isPhone]]">
              <div class="top-nav__bar__left-content__title">
                <ag-icon-button icon="mg-navig:burger-menu"
                                on-click="_toggleSideNav">
                </ag-icon-button>
                {{localize(topNavState.module)}}
              </div>
            </template>
          </div>

          <div class="top-nav__bar__right-content">
          <!--
            <notifications-dropdown>
            </notifications-dropdown>
            <ag-top-screen-button dropdown="[[isPhone]]"
                                  horizontal-align="right"
                                  icon="mg-core:user"
                                  selected="[[topNavState.topNavOpened]]"
                                  on-selected-changed="_onPlayerSelectedChanged">     
              <template is="dom-if" if="[[isPhone]]">
                <player-profile data="[[gameStatusState.data]]"></player-profile>
              </template>
            </ag-top-screen-button>
            -->
            
            <ag-top-screen-button dropdown
                                  click-close
                                  horizontal-align="right"
                                  icon="mg-navig:kebab-menu">     
              <div style="width: 200px">
              <!--
                <ag-dropdown-option icon="mg-core-tiny:settings">
                  {{localize('TOP_MENU_DROPDOWN_SETTINGS')}}
                </ag-dropdown-option>
                <ag-dropdown-option icon="mg-core-tiny:user"
                                    on-action="_onOpenInvitationModal">
                  {{localize('TOP_MENU_DROPDOWN_INVITATION')}}
                </ag-dropdown-option>
                -->
                <ag-dropdown-option icon="mg-core-tiny:logout"
                                    on-action="_onLogout">
                  {{localize('TOP_MENU_DROPDOWN_LOGOUT')}}
                </ag-dropdown-option>
              </div>
            </ag-top-screen-button>
          </div>  
        </div>



        <!-- PLAYER PROFILE BAR -->
        <!--
        <template is="dom-if" if="[[!isPhone]]">
          <ag-border-box class="top-nav__player"
                         type="full">
            <player-profile data="[[gameStatusState.data]]"></player-profile>
          </ag-border-box>
        </template>
        -->

        <!-- SUBNAVIG -->
        <ag-border-box class="top-nav__wrapper">
          <div class="top-nav__wrapper__nav">
            <template is="dom-repeat" items="[[menuConfig]]">
              <template restamp is="dom-if" if="[[_isActiveModule(item.type, topNavState.module)]]">
                <template is="dom-repeat" items="[[item.subModules]]" as="subModule">
                  <ag-horizontal-menu-item selected="[[_isActiveSubmodule(subModule.type, topNavState.subModule)]]"
                                            on-action="_changeRoute">
                    <template restamp is="dom-if" if="[[isPhone]]">
                      <ag-icon icon="[[subModule.icon]]" size="tiny"></ag-icon>
                    </template>
                    {{localize(subModule.type)}}
                  </ag-horizontal-menu-item>
                </template>
              </template>
            </template>
          </div>
        </ag-border-box> 
             
      </div>
    `;
  }

  _isActiveModule(type, moduleName) {
    return type === moduleName;
  }

  _isActiveSubmodule(type, subModule) {
    return type === subModule;
  }

  _isNavOpened(navOpened, isPhone) {
    return navOpened ? '--opened' : '--closed';
  }

  _onBorderBoxType(navOpened) {
    return navOpened ? 'full' : '';
  }

  _onLogout() {
    store.dispatch(logoutResource(store));
  }

  _changeRoute(e) {
    store.dispatch(navigate(e.model.subModule.route));
  }

  _onPlayerSelectedChanged(e) {
    e.detail.selected ? store.dispatch(openTopNav()) : store.dispatch(closeTopNav());
  }

  _toggleSideNav() {
    store.dispatch(openSidevNav());
  }

  _onOpenInvitationModal() {
    store.dispatch(navigate(`/secured/dashboard/missions-and-quests?modal=${ModalsEnum.INVITATION}`))
  }
}

customElements.define('top-nav', TopNav);
