import { html, PolymerElement } from '@polymer/polymer';

import './ag-horizontal-menu-item.css';

export class AgHorizontalMenuItem extends PolymerElement {

  static get properties() {
    return {
      disabled: {
        type: Boolean,
        value: false
      },
      selected: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-horizontal-menu-item-style"></style>
      
      <button class="horizontal-menu-item"
              disabled="[[disabled]]"
              selected$="[[selected]]"
              on-click="_onItemClick">
        <span class="horizontal-menu-item__label">
          <slot></slot>
        </span>
      </button>
    `;
  }

  _onItemClick(e) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('action'));
    }
  }

  _isDisabled(isDisabled) {
    return isDisabled ? '--disabled' : '';
  }

  _isSelected(isSelected) {
    return isSelected ? '--selected' : '';
  }
}

customElements.define('ag-horizontal-menu-item', AgHorizontalMenuItem);
