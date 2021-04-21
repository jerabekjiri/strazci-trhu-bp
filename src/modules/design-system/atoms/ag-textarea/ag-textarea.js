import { html, PolymerElement } from '@polymer/polymer';
import '@polymer/paper-input/paper-textarea';

import './ag-textarea.css';

export class AgTextarea extends PolymerElement {

  static get properties() {
    return {
      value: {
        type: String
      },
      placeholder: {
        type: String
      },
      max: {
        type: Number
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-textarea-style"></style>
      <style include="scroll-bar-style"></style>
      <paper-textarea maxLength="[[max]]"
                      placeholder="[[placeholder]]"
                      class="ag-textarea"
                      value="[[value]]"
                      on-value-changed="_onTextChanged">
      </paper-textarea>
    `;
  }

  _onTextChanged(e) {
    this.dispatchEvent(new CustomEvent('value-changed', { value: e.detail.value }));
  }
}

customElements.define('ag-textarea', AgTextarea);