import { html, PolymerElement } from '@polymer/polymer';

import '@polymer/iron-dropdown/iron-dropdown';

import './ag-top-screen-button.css';

export class AgTopScreenButton extends PolymerElement {

  constructor() {
    super();
    this.id = `dropdown_${Math.random().toString(36).substr(2, 9)}`;
  }

  static get properties() {
    return {
      icon: {
        type: String,
        value: 'mg-main-menu:base'
      },
      counter: {
        type: Number,
        value: 0
      },
      color: {
        type: String,
        value: 'main'
      },
      dropdown: {
        type: Boolean,
        value: false
      },
      horizontalAlign: {
        type: String,
        value: 'left'
      },
      selected: {
        type: Boolean,
        value: false
      },
      clickClose: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-top-screen-button-style"></style>
      
      <button class$="top-screen-button top-screen-button--[[color]]"
              selected$="[[selected]]"
              on-click="_onSelected">
      
        <template restamp is="dom-if" if="[[counter]]">
          <div class="top-screen-button__counter">
            {{counter}}
          </div>
        </template>

        <ag-icon class="top-screen-button__icon"
                 icon="[[icon]]">
        </ag-icon>
      </button>

      <iron-dropdown id$="[[id]]"
                     class="dropdown"
                     on-iron-overlay-closed="_onDropdownClose"   
                     no-overlap
                     horizontal-align="{{horizontalAlign}}"
                     on-click="_onDropdownClick">
        <template restamp is="dom-if" if="[[selected]]">
          <div class$="dropdown__content dropdown__content--[[color]]"
               slot="dropdown-content">
            <slot></slot>
          </div>
        </template>
      </iron-dropdown>
    `;
  }

  _onSelected() {
    this.selected = !this.selected;
    if (this.dropdown) {
      if (this.selected) {
        setTimeout(() => {
          this.shadowRoot.querySelector(`#${this.id}`).open();
          this.dispatchEvent(new CustomEvent('open'));
        }, 50)

      } else {
        this.shadowRoot.querySelector(`#${this.id}`).close();
      }
    }
    this.dispatchEvent(new CustomEvent('selected-changed', { detail: { selected: this.selected } } ));
  }

  _onDropdownClose(e) {
    this.selected = false;
    this.dispatchEvent(new CustomEvent('close'));
    this.dispatchEvent(new CustomEvent('selected-changed', { detail: { selected: this.selected } } ));
  }

  _isSelected(selected) {
    return selected ? '--selected' : '';
  }

  _onDropdownClick() {
    if (this.clickClose) {
      this._onSelected();
    }
  }
}

customElements.define('ag-top-screen-button', AgTopScreenButton);
