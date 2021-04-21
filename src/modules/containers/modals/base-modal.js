import { PolymerElement, html } from '@polymer/polymer';

import '../../design-system/atoms/ag-icon-button/ag-icon-button';

import './base-modal.css';
import { ModalsEnum } from '../../enums/modals';

export class BaseModal extends PolymerElement {

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    switch(this.type) {
      case ModalsEnum.INVITATION:
        import('./invitation/invitation.modal').then(() => true);
        break;
      case ModalsEnum.MISSION_DETAIL:
        import('./mission-detail/mission-detail.modal').then(() => true);
        break;
      case ModalsEnum.MARKET_PRODUCT:
        import('./market/market-product.modal').then(() => true);
        break;
    }
  }

  static get properties() {
    return {
      type: {
        type: String,
        value: null
      }
    }
  }

  static get template() {
    return html `
      <style include="base-modal-style"></style>
      <div id="baseModalWrapper" class="wrapper" on-click="_onBackdropClick">
        <div class="base-modal">
          <template is="dom-if" if="[[_isType(type, 'INVITATION')]]">
            <invitation-modal on-close-modal="_onCloseModal"></invitation-modal>
          </template>
          <template is="dom-if" if="[[_isType(type, 'MISSION_DETAIL')]]">
            <mission-detail-modal></mission-detail-modal>
          </template>
          <template is="dom-if" if="[[_isType(type, 'MARKET_PRODUCT')">
            <market-product-modal on-close-modal="_onCloseModal"></market-product-modal>
          </template>
        </div>
      </div>
    `;
  }

  _isType(val, type) {
    return val === type;
  }

  _onBackdropClick(e) {
    if (e.target.id === 'baseModalWrapper') {
      this._onCloseModal();
    }
  }

  _onCloseModal() {
    this.dispatchEvent(new CustomEvent('close-modal'));
  }
}

customElements.define('base-modal', BaseModal);
