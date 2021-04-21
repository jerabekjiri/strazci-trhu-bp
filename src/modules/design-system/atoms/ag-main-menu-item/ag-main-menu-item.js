import { html, PolymerElement } from '@polymer/polymer';

import '../ag-icon/ag-icon';

import './ag-main-menu-item.css';

export class AgMainMenuItem extends PolymerElement {

  constructor() {
    super();
  }

  static get properties() {
    return {
      icon: {
        type: String,
        value: 'mg-main-menu:base'
      },
      route: {
        type: String,
      },
      disabled: {
        type: Boolean,
        value: false
      },
      selected: {
        type: Boolean,
        value: false
      },
      compressed: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-main-menu-item-style"></style>
      
      <button class="main-menu-item"
              on-click="_onItemClick"
              disabled="[[disabled]]"
              selected$="[[selected]]">
        <ag-icon icon$="{{icon}}"
                 glow="[[selected]]">
        </ag-icon>
        <template restamp is="dom-if" if="[[!compressed]]">
          <span class="main-menu-item__label">
            <slot></slot>
          </span>
        </template>
      </button>
    `;
  }

  _onItemClick(e) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('action'));
    }
  }
}

customElements.define('ag-main-menu-item', AgMainMenuItem);
