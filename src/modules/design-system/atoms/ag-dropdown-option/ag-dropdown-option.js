import { html, PolymerElement } from '@polymer/polymer';

import './ag-dropdown-option.css';

export class AgDropdownOption extends PolymerElement {

  constructor() {
    super();
    this.glow = false;
  }

  static get properties() {
    return {
      icon: {
        type: String,
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-dropdown-option-style"></style>
      <div class="ag-dropdown-option"
           on-click="_onOptionClick"
           tabindex="1"
           on-mouseover="_onMouseover"
           on-mouseout="_onMouseout">
        <template is="dom-if" if="[[icon]]">
          <ag-icon class="ag-dropdown-option__icon" 
                   icon$="[[icon]]"
                   size="tiny"
                   glow="[[glow]]">
          </ag-icon>
          <span class="ag-dropdown-option__text">
            <slot></slot>
          </span>
        </template>
      </div>
    `;
  }

  _onOptionClick() {
    this.dispatchEvent(new CustomEvent('action'));
  }

  _onMouseover() {
    this.glow = true;
  }

  _onMouseout() {
    this.glow = false;
  }

}

customElements.define('ag-dropdown-option', AgDropdownOption);
