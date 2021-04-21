import {
  PolymerElement,
  html
} from '@polymer/polymer';

export class AgBorderBox extends PolymerElement {

  static get properties() {
    return {
      type: {
        type: String,
        value: 'full'
      }
    }
  }

  static get template() {
    return html`
      <style>
        .border-box--line {
          width: 100%;
          height: 1px;
          box-shadow: inset 0px -1px 0px 0px rgba(51, 204, 255, .2);
          background:
            linear-gradient(to top, rgba(51, 204, 255, 1) 1px, transparent 1px) 0 100%,
            linear-gradient(to top, rgba(51, 204, 255, 1) 1px, transparent 1px) 100% 100%;
          background-repeat: no-repeat;
          background-size: 7px 1px;  
        }
        .border-box--full {
          width: 100%;
          height: 100%;
          box-shadow: inset 0px 0px 0px 1px rgba(51, 204, 255, .2);
          background:
            linear-gradient(to right, rgba(51, 204, 255, 1) 1px, transparent 1px) 0 0,
            linear-gradient(to right, rgba(51, 204, 255, 1) 1px, transparent 1px) 0 100%,
            linear-gradient(to left, rgba(51, 204, 255, 1) 1px, transparent 1px) 100% 0,
            linear-gradient(to left, rgba(51, 204, 255, 1) 1px, transparent 1px) 100% 100%,
            linear-gradient(to bottom, rgba(51, 204, 255, 1) 1px, transparent 1px) 0 0,
            linear-gradient(to bottom, rgba(51, 204, 255, 1) 1px, transparent 1px) 100% 0,
            linear-gradient(to top, rgba(51, 204, 255, 1) 1px, transparent 1px) 0 100%,
            linear-gradient(to top, rgba(51, 204, 255, 1) 1px, transparent 1px) 100% 100%;
          background-repeat: no-repeat;
          background-size: 7px 7px;
        }
        .border-box--border-bottom {
          width: 100%;
          height: 100%;
          box-shadow: inset 0px -1px 0px 0px rgba(51, 204, 255, .2);
          background:
            linear-gradient(to right, rgba(51, 204, 255, 1) 1px, transparent 1px) 0 100%,
            linear-gradient(to left, rgba(51, 204, 255, 1) 1px, transparent 1px) 100% 100%,
            linear-gradient(to top, rgba(51, 204, 255, 1) 1px, transparent 1px) 0 100%,
            linear-gradient(to top, rgba(51, 204, 255, 1) 1px, transparent 1px) 100% 100%;
          background-repeat: no-repeat;
          background-size: 7px 7px;   
        }
        .border-box--border-bottom__sites {
          width: 100%;
          height: 100%;
          background:
            linear-gradient(transparent 0%, rgba(51, 204, 255, .2) 100%) 0 0,
            linear-gradient(transparent 0%, rgba(51, 204, 255, .2) 100%) 100% 100%;
          background-repeat: no-repeat;
          background-size: 1px 100%; 
        }
      </style>
      <div class$="border-box--[[type]]">
        <template restamp is="dom-if" if="[[_isType('border-bottom')]]">
          <div class="border-box--border-bottom__sites">
            <slot></slot>
          </div>
        </template>
        <template restamp is="dom-if" if="[[_isType('full')]]">
          <slot></slot>
        </template>
      </div>
    `;
  }

  _isType(type) {
    return this.type === type;
  }
}

customElements.define('ag-border-box', AgBorderBox);
