import { html, PolymerElement } from '@polymer/polymer';

import './ag-hyperlink.css';

export class AgHyperlink extends PolymerElement {

  static get properties() {
    return {
      size: {
        type: String,
        value: 'normal'
      },
      weight: {
        type: String,
        value: 'normal'
      },
      selected: {
        type: Boolean,
        value: false
      },
    }
  }

  static get template() {
    return html`
      <style include="ag-hyperlink-style"></style>
      
      <div class$="hyperlink{{_isSize(size)}}{{_isWeight(weight)}} hyperlink{{_isSelected(selected)}}"
           on-click="_onHyperlinkClick">
        <slot></slot>
      </div>
    `;
  }

  _onHyperlinkClick(e) {
    this.dispatchEvent(new CustomEvent('action'));
  }

  _isSelected(selected) {
    return selected ? '--selected' : '';
  }

  _isSize(size) {
    return '--' + size;
  }

  _isWeight(weight) {
    return '--' + weight;
  }

}

customElements.define('ag-hyperlink', AgHyperlink);
