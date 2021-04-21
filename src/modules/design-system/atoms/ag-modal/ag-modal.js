import { PolymerElement, html } from '@polymer/polymer';

import '../ag-icon-button/ag-icon-button';

import './ag-modal.css';

export class AgModal extends PolymerElement {

  static get template() {
    return html `
      <style include="ag-modal-style"></style>
      <div class="ag-modal">
        <div class="ag-modal__header">
          <slot name="title"></slot>
          <ag-icon-button icon="mg-navig:cross"
                          on-click="_onModalClose">
          </ag-icon-button>
        </div>
        <slot name="content"></slot>
        <div class="ag-modal__actions">
          <slot name="actions"></slot>
        </div>
      </div>
    `;
  }

  _onModalClose() {
    this.dispatchEvent(new CustomEvent('close-modal'));
  }
}

customElements.define('ag-modal', AgModal);
