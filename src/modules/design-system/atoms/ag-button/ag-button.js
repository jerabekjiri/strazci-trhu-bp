import { html, PolymerElement } from '@polymer/polymer';

import './ag-button.css';

export class AgButton extends PolymerElement {

  static get properties() {
    return {
      type: {
        type: String,
        value: 'primary'
      },
      disabled: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-button-style"></style>
      <button disabled="{{disabled}}"
              class$="button--{{type}}"
              on-click="_onButtonClick">
        <template restamp is="dom-if" if="{{_isSecondary(type)}}">
          <div class="corner tl"></div>
          <div class="corner tr"></div>
          <div class="corner bl"></div>
          <div class="corner br"></div>
        </template>
        <div class="button__text">
          <slot></slot>
        </div>
      </button>
    `;
  }
  _onButtonClick(e) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('action'));
    }
  }

  _isSecondary(type) {
    return type === 'secondary';
  }
}

customElements.define('ag-button', AgButton);