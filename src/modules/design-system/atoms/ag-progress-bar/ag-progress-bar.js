import { html, PolymerElement } from '@polymer/polymer';

import './ag-progress-bar.css';

export class AgProgressBar extends PolymerElement {

  static get properties() {
    return {
      size: {
        type: String,
        value: ''
      },
      value: {
        type: Number
      },
      max: {
        type: Number
      },
      color: {
        type: String,
        value: ''
      },
      disabled: {
        type: Boolean,
        value: false
      }
    }
  }

  static get observers() {
    return [
      '$onValuesChanged(value, max, size)',
      '$filledBlocksCount(value)'
    ]
  }

  static get template() {
    return html`
      <style include="ag-progress-bar-style"></style>
      <div class$="side-block{{_isSize(size)}} side-block{{_isColor(color, disabled)}}"></div>
        <div class$="progress-bar{{_isSize(size)}} progress-bar{{_isSize(size)}}{{_isColor(color, disabled)}}">
          <template restamp is="dom-if" if="{{_isBasic(size)}}">
            <div class$="progress-bar__pipe{{_isSize(size)}} progress-bar__pipe{{_isColor(color, disabled)}}" id="progress-bar__pipe"></div>
          </template>
          <template restamp is="dom-if" if="{{!_isBasic(size)}}">
            <template is="dom-repeat" items="{{_getBlocks()}}">  
              <div class$="block{{_isFilled(value, index)}}{{_isSize(size)}} block{{_isFilled(value, index)}}{{_isColor(color, disabled)}}"></div>
            </template>
          </template>
        </div>
      <div class$="side-block{{_isSize(size)}} side-block{{_isColor(color, disabled)}}"></div>     
    `;
  }

  $onValuesChanged(value, max, size) {
    if (this._isBasic(size)) {
      super.ready();
      setTimeout(() => {
        this.shadowRoot.querySelector('#progress-bar__pipe').style.width = (100 * value / max) + '%';
      });
    }
  }

  $filledBlocksCount(value) {
    this.filledBlocks = value;
  }

  _isColor(color, disabled) {
    return color !== '' ? !disabled ? !disabled && color !== '' ? '--' + color : '--main' : '--disabled' : '--disabled';
  }

  _isBasic(size) {
    return size === 'tiny' || size === 'small';
  }

  _isSize(size) {
    return size !== '' ? '--' + size : '--normal';
  }

  _isFilled(value, index) {
    return value > index ? '--filled' : '';
  }

  _getBlocks() {
    return Array(10).fill(null);
  }
}

customElements.define('ag-progress-bar', AgProgressBar);
