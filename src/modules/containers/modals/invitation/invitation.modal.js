import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';
import { VALIDATOR_TYPES } from '../../../shared/providers/validator.provider';

import { store } from '../../../libraries/store/store';
import { AbstractContainer } from '../../../shared/abstracts/abstract.container';
import invitationResourceReducer from '../../../resources/security/reducers/invitation.reducers';
import { invitationResource } from '../../../resources/security/security-api.actions';
import { invitationSelector } from '../../../resources/security/selectors/invitation.selectors';
import { invitationInit } from '../../../resources/security/actions/invitation.actions';
import { ErrorCodesEnum } from '../../../enums/error-codes';
import { injectResourceAsyncReducer, unregisterResourceAsyncReducer } from '../../../libraries/store/store-registry';
import { NotificationProvider } from '../../../shared/providers/notification.provider';

import '../../../design-system/atoms/ag-modal/ag-modal';
import '../../../design-system/atoms/ag-input-field/ag-input-field';
import '../../../design-system/atoms/ag-button/ag-button';
import '../../../design-system/atoms/ag-loader/ag-loader';

import './invitation.modal.css';

export class InvitationModal extends connect(store)(AbstractContainer) {

  constructor() {
    super();
    this.notificationProvider = new NotificationProvider();
    injectResourceAsyncReducer(store, 'invitation', invitationResourceReducer);
    this.invitationDto = {
      firstName: null,
      lastName: null,
      email: null
    }
    this.validators = {
      firstName: [VALIDATOR_TYPES.REQUIRED],
      lastName: [VALIDATOR_TYPES.REQUIRED],
      email: [VALIDATOR_TYPES.REQUIRED, VALIDATOR_TYPES.EMAIL]
    }
    this.formErrors = {
      firstName: null,
      lastName: null,
      email: null
    }
  }

  stateChanged(state) {
    this.invitationState = invitationSelector(state);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    store.dispatch(invitationInit());
    unregisterResourceAsyncReducer(store, 'invitation');
  }

  static get observers() {
    return [
      '$invitationErrorHandler(invitationState.error)',
      '$invitationSentSuccess(invitationState.data)'
    ]
  }

  static get template() {
    return html `
      <style include="invitation-modal-style"></style>
      <ag-modal on-close-modal="_onCloseModal">
        <span slot="title">{{localize('INVITATION_TITLE')}}</span>
        <span slot="content">
          <template is="dom-if" if="[[!invitationState.isLoading]]">
            <div class="invitation-modal__form">
              <ag-input-field label="{{localize('INVITATION_FIELD_FIRST_NAME')}}"
                              value="{{invitationDto.firstName}}"
                              validators="[[validators.firstName]]"
                              on-keydown="_onKeyDown"
                              error="{{formErrors.firstName}}">
              </ag-input-field>
              <ag-input-field label="{{localize('INVITATION_FIELD_LAST_NAME')}}"
                              value="{{invitationDto.lastName}}"
                              validators="[[validators.lastName]]"
                              on-keydown="_onKeyDown"
                              error="{{formErrors.lastName}}">
              </ag-input-field>
              <ag-input-field label="{{localize('INVITATION_FIELD_EMAIL')}}"
                              value="{{invitationDto.email}}"
                              validators="[[validators.email]]"
                              on-keydown="_onKeyDown"
                              error="{{formErrors.email}}">
              </ag-input-field>
            </div>
          </template>
          <template is="dom-if" if="[[invitationState.isLoading]]">
            <ag-loader></ag-loader>
          </template>
        </span>
        <span slot="actions">
          <div class="invitation-modal__actions">
            <ag-button class="login__wrapper__button"
                       disabled="{{_isSubmitDisabled(formErrors.firstName.valid, formErrors.lastName.valid, formErrors.email.valid)}}"
                       on-action="_sendInvitation">
              {{localize('INVITATION_BUTTON_SUBMIT')}}
            </ag-button>
          </div>
        </span>
      </ag-modal>
    `;
  }

  $invitationErrorHandler(error) {
    if (!!error) {
      switch (error.errorCode) {
        case ErrorCodesEnum.ALREADY_REGISTERED:
          this.notificationProvider.showErrorMessage(
            this.localize(`GENERIC_MESSAGE_${error.message}`, 'email', this.invitationDto.email)
          );
      }
    }
  }

  $invitationSentSuccess(success) {
    if (success) {
      this.notificationProvider.showSuccessMesage(
        this.localize(`GENERIC_MESSAGE_SUCCESS_SENT_INVITATION`, 'name', `${this.invitationDto.firstName} ${this.invitationDto.lastName}`)
      );
      this.dispatchEvent(new CustomEvent('close-modal'));
    }
  }

  _onCloseModal() {
    this.dispatchEvent(new CustomEvent('close-modal'));
  }

  _isSubmitDisabled(firstName, lastName, email) {
    return !firstName || !lastName || !email;
  }

  _sendInvitation() {
    store.dispatch(invitationResource(this.invitationDto))
  }

  _onKeyDown(e) {
    if (
      e.keyCode == 13 &&
      !this._isSubmitDisabled(this.invitationDto.firstName, this.invitationDto.lastName, this.invitationDto.email)
    ) {
      this._sendInvitation();
    }
  }
}

customElements.define('invitation-modal', InvitationModal);
