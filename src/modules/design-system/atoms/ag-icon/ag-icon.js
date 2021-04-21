import { html, PolymerElement } from '@polymer/polymer';

import './ag-icon.css';

export class AgIcon extends PolymerElement {

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
      glow: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-icon-style"></style>

      <iron-icon class$="ag-icon icon--{{size}}" icon$="{{_getIcon(icon, glow)}}"></iron-icon>
    `;
  }

  _getIcon(icon, glow) {
    return `${icon}--${glow ? 'glow' : 'normal'}`
  }
}

customElements.define('ag-icon', AgIcon);
