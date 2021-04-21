import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../libraries/store/store';
import { AbstractContainer } from '../../../shared/abstracts/abstract.container';
import { injectResourceAsyncReducer } from '../../../libraries/store/store-registry';
import '@polymer/paper-spinner/paper-spinner.js';
import '@polymer/iron-scroll-threshold/iron-scroll-threshold.js';

import loadNotificationsInfoResourceReducer from '../../../resources/notifications/reducers/load-notifications-info.reducers';
import loadNotificationsReourceReducer from '../../../resources/notifications/reducers/load-notifications.reducers';

import {
  loadNotificationsResource,
  loadNotificationsInfoResource,
  patchNotificationAsReadResource,
  loadMoreNotificationsResource
} from '../../../resources/notifications/notifications-api.actions';

import {
  notificationsResourceSelector,
  notificationsInfoResourceSelector
} from '../../../resources/notifications/selectors/notifications.selectors';

import '../../../design-system/atoms/ag-top-screen-button/ag-top-screen-button';
import '../../../design-system/atoms/ag-notification-dropdown-row/ag-notification-dropdown-row';

import './notifications-dropdown.css';

export class NotificationsDropdown extends connect(store)(AbstractContainer) {

  constructor() {
    super();
    injectResourceAsyncReducer(store, 'notificationsInfo', loadNotificationsInfoResourceReducer);
    injectResourceAsyncReducer(store, 'notifications', loadNotificationsReourceReducer);
  }

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(loadNotificationsInfoResource());
    this.filter = { limit: 5, offset: 0, total: 0 }
  }

  stateChanged(state) {
    this.notificationsState = notificationsResourceSelector(state);
    this.notificationsInfoState = notificationsInfoResourceSelector(state);
  }

  static get observers() {
    return [
      '$onNotificationLoaded(notificationsState.isLoading, notificationsState.data.length)'
    ]
  }

  static get template() {
    return html`
      <style include="notifications-dropdown-style"></style>
      <style include="scroll-bar-style"></style>
      <ag-top-screen-button dropdown
                            horizontal-align="right"
                            icon="mg-core:bell"
                            color="[[_getNotificationsButtonColor(notificationsInfoState.data)]]"
                            counter$="[[notificationsInfoState.data]]"                           
                            disabled="[[!notificationsState.isLoading]]"
                            on-open="_onTopScreenButtonOpen"
                            on-close="_onTopScreenButtonClose">     
        <div class="notifications-box">
          <div class="notifications-box__title">
            {{localize('NOTIFICATION_TITLE')}}
          </div>
          <template restamp is="dom-if" if="[[notificationsOpened]]" restamp>
            <iron-scroll-threshold id="notificationsScrollBox"
                                   class="notifications-box__content"
                                   on-lower-threshold="_onLoadMoreNotifications">
              <template is="dom-repeat" items="[[notificationsState.data]]">
                <div class="notifications-box__content__item">
                  <ag-notification-dropdown-row id="[[item.id]]"
                                                title="[[_getNotificationTitle(item.type, item)]]"
                                                text="[[_getNotificationText(item.type, item)]]"
                                                created="[[item.createdDate]]"
                                                color="[[_getNotificationColor(item)]]"
                                                on-action="_onNotificationAction">         
                  </ag-notification-dropdown-row>
                </div>
              </template>
              <template restamp is="dom-if" if="[[_hasNotifications(notificationsState.data, notificationsState.isLoading)]]">
                <div class="notifications-box__content__not-found-message">
                  <span>{{localize('NOTIFICATION_EMPTY')}}</span>
                </div>
              </template>
              <template restamp is="dom-if" if="[[_hasMoreNotifications(noMoreNotifications, notificationsState.data, notificationsState.isLoading)]]">
                <div class="notifications-box__content__no-more-notification">
                  <span>{{localize('NOTIFICATION_NO_MORE')}}</span>
                </div>
              </template>
            </iron-scroll-threshold>
          </template>
        </div>     
      </ag-top-screen-button>
    `;
  }

  $onNotificationLoaded(isLoading, length) {
    if (
      isLoading === false &&
      this.filter &&
      length !== this.filter.total &&
      !(this.filter.total % this.filter.limit) &&
      !(length % this.filter.limit)
    ) {
      this.noMoreNotifications = false;
      this.filter.total = length;
      this.shadowRoot.querySelector('#notificationsScrollBox').clearTriggers();
    } else {
      this.noMoreNotifications = true;
    }
  }

  _getNotificationsButtonColor(count) {
    return !!count ? 'warning' : 'main';
  }

  _getNotificationColor(item) {
    return item.readDate ? 'main' : 'warning';
  }

  _getNotificationTitle(type, notification) {
    return this.localize(`NOTIFICATION_${type}_TITLE`, 'level', this._getParamsValue(notification, 'level'));
  }

  _getNotificationText(type, notification) {
    return this.localize(`NOTIFICATION_${type}_TEXT`, 'experiences', this._getParamsValue(notification, 'experiences'));
  }

  _hasNotifications(data, isLoading) {
    return data && data.length === 0 && !isLoading;
  }

  _hasMoreNotifications(noMoreNotifications, data, isLoading) {
    return noMoreNotifications && data && !!data.length && data.length >= this.filter.limit && !isLoading;
  }

  _onNotificationAction(e) {
    if (!(this.notificationsState.data.find(notification => notification.id === e.detail.value) || {}).readDate) {
      store.dispatch(patchNotificationAsReadResource(e.detail.value, this.filter));
    }
  }

  _onTopScreenButtonOpen() {
    this.filter = { limit: 5, offset: 0, total: 0 };
    store.dispatch(loadNotificationsResource(this.filter));
    this.notificationsOpened = true;
  }

  _onLoadMoreNotifications() {
    if (this.notificationsState.isLoading === false) {
      store.dispatch(loadMoreNotificationsResource(this.filter = { ...this.filter, offset: this.filter.offset + this.filter.limit }))
    }
  }

  _onTopScreenButtonClose() {
    this.notificationsOpened = false;
  }

  _onRowClick() {
    this.dispatchEvent(new CustomEvent('action', { detail: { value: Number(this.id) } }));
  }

  _getParamsValue(notification, key) {
    return (notification.values.find(value => value.param === key) || {}).value;
  }
}

customElements.define('notifications-dropdown', NotificationsDropdown);