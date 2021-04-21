import {
  PolymerElement,
  html
} from '@polymer/polymer';

import { colorPalette } from '../styles/color-palette';

export class AgButton extends PolymerElement {

  static get properties() {
    return {
      type: {
        type: String,
        value: 'primary'
      },
      floating: {
        type: String,
        value: 'center'
      }
    }
  }

  static get template() {
    return html`
      ${colorPalette}
      <style>
        :host {
          display: block;
        }
        .button {
          width: 100%;
        }
        button {
          height: 37px;
          padding: 8px 32px;
          border-radius: 18.5px;                   
          outline: none;      
          font-size: 16px;
          line-height: 20px;
          font-weight: 700;
          border: 0px solid transparent;
        }
        button:hover {
          cursor: pointer;                
        }
        .primary {
          background: var(--confirmation-color);
          color: var(--layout-white);
        }
        .primary:hover {
          background: var(--confirmation-color-hover);
        }
        .secondary {
          -webkit-box-shadow: inset 0px 0px 0px 1px var(--confirmation-color);
          -moz-box-shadow: inset 0px 0px 0px 1px var(--confirmation-color);
          box-shadow: inset 0px 0px 0px 1px var(--confirmation-color);
          background: var(--layout-white);
          color: var(--confirmation-color);
        }
        .secondary:hover {
          -webkit-box-shadow: inset 0px 0px 0px 1px var(--confirmation-color-hover);
          -moz-box-shadow: inset 0px 0px 0px 1px var(--confirmation-color-hover);
          box-shadow: inset 0px 0px 0px 1px var(--confirmation-color-hover);
          color: var(--confirmation-color-hover);
        }
        .center {
          text-align: center;
        }
      </style>
      <div class$="button {{floating}}">
        <button class$="{{type}}" on-click="_onButtonClick">
          <slot></slot>
        </button>
      </div>
      `;
  }

  _onButtonClick(e) {
    this.dispatchEvent(new CustomEvent('button-click'))
  }
}

customElements.define('ag-button', AgButton);
