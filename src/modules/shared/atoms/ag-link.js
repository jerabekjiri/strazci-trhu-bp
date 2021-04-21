import {
  PolymerElement,
  html
} from '@polymer/polymer';

export class AgLink extends PolymerElement {

  static get properties() {
    return {
      floating: {
        type: String,
        value: 'center'
      }
    }
  }

  static get template() {
    return html `
      <style>
        :host {
          display: block;
          width: 100%;
        }
        .link {
          width: 100%;
          font-size: 13px;
          color: #6A6A6A;
          font-size: 13px;
          font-weight: 500;
        }
        .link:hover {
          cursor: pointer;
          color: #606060;
          text-decoration: underline;
        }
        .center {
          text-align: center;
        }
      </style>
      <div class$="{{floating}}">
        <span class="link"><slot></slot></span>
      </div>
    `;
  }
}

customElements.define('ag-link', AgLink);
