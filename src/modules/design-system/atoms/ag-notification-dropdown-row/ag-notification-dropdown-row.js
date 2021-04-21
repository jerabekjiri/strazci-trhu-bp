import { html, PolymerElement } from '@polymer/polymer';

import './ag-notification-dropdown-row.css';

export class AgNotificationDropdownRow extends PolymerElement {

  static get properties() {
    return {
      id: {
        type: Number
      },
      title: {
        type: String
      },
      text: {
        type: String
      },
      created: {
        type: String
      },
      color: {
        type: String,
        value: 'main'
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-notification-dropdown-row-style"></style>
      <div class$="row--[[color]]" on-click="_onRowClick">
        <div class="left-box">
          <div class="left-box__title">
            {{title}}
          </div>
          <div class="left-box__text">
            {{text}}
          </div>
        </div>
        <div class="right-box">
          <span class="right-box__label">
            {{_formatDate(created)}}
          </span>
        </div>
      </div>
    `;
  }

  _formatDate(created) {
    return '5 h';
  }

  _onRowClick(e) {
    this.dispatchEvent(new CustomEvent('action', { detail: { value: Number(this.id) } }));
  }
}

customElements.define('ag-notification-dropdown-row', AgNotificationDropdownRow);