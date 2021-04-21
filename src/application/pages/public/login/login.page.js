import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';

import { AbstractPage } from '../../../../modules/shared/abstracts/abstract.page';
import { applicationSelector } from '../../../application.selectors';
import { EncryptionService } from '../../../../modules/shared/services/encryption.service';
import { NotificationProvider } from '../../../../modules/shared/providers/notification.provider';
import { loginFailedErrorSelector } from '../../../../modules/resources/security/selectors/security.selectors';
import { loginResource } from '../../../../modules/resources/security/security-api.actions';
import { store } from '../../../../modules/libraries/store/store';
import { VALIDATOR_TYPES } from '../../../../modules/shared/providers/validator.provider';

import '@polymer/paper-input/paper-input';
import '../../../../modules/shared/atoms/ag-border-box';
import '../../../../modules/design-system/atoms/ag-button/ag-button';
import '../../../../modules/design-system/atoms/ag-input-field/ag-input-field';

import './login.page.css';

export class LoginPage extends connect(store)(AbstractPage) {

  constructor() {
    super();
    this.encryptionService = new EncryptionService();
    this.notificationProvider = new NotificationProvider();
    this.loginDto = {};
    this.loginValidators = [
      VALIDATOR_TYPES.REQUIRED,
    ];
    this.passwordValidators = [
      VALIDATOR_TYPES.REQUIRED
    ];
  }

  stateChanged(state) {
    this.applicationState = applicationSelector(state);
    this.loginFailedError = loginFailedErrorSelector(state);
  }

  static get observers() {
    return [
      '$loginFailedError(loginFailedError)'
    ]
  }

  $loginFailedError(error) {
    !!error && this.notificationProvider.showErrorMessage(this.localize(`GENERIC_MESSAGE_${error.message}`));
  }

  static get template() {
    return html`
      <style include="login-page-style"></style>
      <template restamp is="dom-if" if="[[!applicationState.secured]]">

        <div class="login-page">
          
          <h1 class="login-page__title">
            {{localize('LOGIN_PAGE_TITLE')}}
          </h1>

          <div class="login-page__box">
            <div class="login-page__box__header">
              <span>{{localize('LOGIN_PAGE_HEADER')}}</span>
              <div class="login-page__box__header__buttons">
                <button disabled$="[[_isSelectedLang(language, 'cs')]]"
                        class="login-page__box__header__buttons__button--cs"
                        data-item="cs"
                        on-click="_setLanguage"></button>
                <button disabled$="[[_isSelectedLang(language, 'en')]]"
                        class="login-page__box__header__buttons__button--en"
                        data-item="en"
                        on-click="_setLanguage"></button>
              </div>
            </div>
            <div class="login-page__box__form">
              <ag-input-field label="{{localize('LOGIN_PAGE_FIELD_LOGIN')}}"
                              value="{{loginDto.login}}"
                              validators="[[loginValidators]]"
                              on-keydown="_onKeyDown">
              </ag-input-field>
              <ag-input-field type="password"
                              label="{{localize('LOGIN_PAGE_FIELD_PASSWORD')}}"
                              value="{{loginDto.password}}"
                              validators="[[loginValidators]]"
                              on-keydown="_onKeyDown">
              </ag-input-field>
              <ag-button class="login__wrapper__button"
                          type="primary"
                          disabled="{{_isSubmitDisabled(loginDto.login, loginDto.password)}}"
                          on-action="_login">
                {{localize('LOGIN_PAGE_BUTTON_LOGIN')}}
              </ag-button>
              <span class="login-page__box__form__lost-password">
                {{localize('LOGIN_PAGE_LINK_LOST_PASSWORD')}}
              </span>
            </div>
            <div class="login-page__box__footer">
              {{localize('LOGIN_PAGE_LINK_CAME_BY_ACCIDENT')}}
            </div>
          </div>
        </div>

      </template>
    `;
  }

  _isSubmitDisabled(login, password) {
    return !login || !password;
  }

  _login() {
    var _loginDto = JSON.parse(JSON.stringify(this.loginDto));
    _loginDto.password = this.encryptionService.sha256(this.loginDto.password);
    store.dispatch(loginResource(_loginDto));
  }

  _onKeyDown(e) {
    if (e.keyCode == 13 && !this._isSubmitDisabled(this.loginDto.login, this.loginDto.password)) {
      this._login(e);
    }
  }

  _setLanguage(e) {
    this.setLanguage(e.target.dataset.item);
  }

  _isSelectedLang(selected, lang) {
    return selected === lang;
  }
}

customElements.define('login-page', LoginPage);