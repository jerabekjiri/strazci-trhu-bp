import { html, PolymerElement } from '@polymer/polymer';

import './ag-vertical-menu-item.css';

export class AgVerticalMenuItem extends PolymerElement {

  static get properties() {
    return {
      title: {
        type: String
      },
      disabled: {
        type: Boolean,
        value: false
      },
      selected: {
        type: Boolean,
        value: false
      },
      color: {
        type: String,
        value: 'main'
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-vertical-menu-item-style"></style>
      
      <div class$="vertical-menu-item--[[color]]{{_isSelected(selected)}}{{_isDisabled(disabled)}}"
           on-click="_onItemClick">
        <span class="vertical-menu-item__label">
          [[title]]
        </span>
        <span class="vertical-menu-item__info">
          <slot></slot>
        </span>
      </div>
    `;
  }

  _onItemClick(e) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('action'));
    }
  }

  _isDisabled(disabled) {
    return disabled ? '--disabled' : '';
  }

  _isSelected(selected) {
    return selected ? '--selected' : '';
  }
}

customElements.define('ag-vertical-menu-item', AgVerticalMenuItem);
