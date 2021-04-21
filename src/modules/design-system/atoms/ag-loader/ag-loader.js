import { PolymerElement, html } from '@polymer/polymer';

import '../ag-icon-button/ag-icon-button';

import './ag-loader.css';

export class AgLoader extends PolymerElement {

  static get template() {
    return html `
      <style include="ag-loader-style"></style>
      <div class="ag-loader">
        Loading...
      </div>
    `;
  }

}

customElements.define('ag-loader', AgLoader);
