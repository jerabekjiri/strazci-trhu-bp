import { html, PolymerElement } from '@polymer/polymer';

import '../ag-icon/ag-icon';
import './ag-icon-button.css';

export class AgIconButton extends PolymerElement {

  static get properties() {
    return {
      icon: {
        type: String,
        value: 'mg-main-menu:base'
      },
      size: {
        type: String,
        value: 'normal'
      },
      color: {
        type: String,
        value: 'main'
      },
      disabled: {
        type: Boolean,
        value: false
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static get template() {
    return html`
      <style include="ag-icon-button-style"></style>
      
      <button class$="icon-button icon-button--{{size}} icon-button--[[color]]"
              disabled="[[disabled]]"
              on-mouseover="_onMouseover"
              on-mouseout="_onMouseout"
              on-focus="_onFocus"
              on-blur="_onBlur">
        <ag-icon size="[[size]]"
                 icon="[[icon]]"
                 glow$="[[_hasGlow(hover, focus)]]">
        </ag-icon>
      </button>
    `;
  }

  _onMouseover() {
    this.hover = true;
  }

  _onMouseout() {
    this.hover = false;
  }

  _onFocus() {
    this.focus = true;
  }

  _onBlur() {
    this.focus = false;
  }

  _hasGlow(hover, focus) {
    return focus || hover;
  }

}

customElements.define('ag-icon-button', AgIconButton);
