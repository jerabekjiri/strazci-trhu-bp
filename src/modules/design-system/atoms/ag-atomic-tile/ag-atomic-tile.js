import { html, PolymerElement } from '@polymer/polymer';

import './ag-atomic-tile.css';

export class AgAtomicTile extends PolymerElement {

  static get properties() {
    return {
      color: {
        type: String,
        value: 'main'
      },
      note: {
        type: String,
        value: ''
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-atomic-tile-style"></style>
  
      <div class$="atomic-tile--[[color]]{{_isReadOnly(note)}}"
           on-click="_onTileClick">
        <div class="atomic-tile__content">
          <slot></slot>
        </div>
        <template restamp is="dom-if" if="{{_isWithNote(note)}}">
          <div class="atomic-tile__label">[[note]]</div>
        </template>
      </div>
  
    `;
  }

  _onTileClick(e) {
    this.dispatchEvent(new CustomEvent('action'));
  }

  _isNotification(notification) {
    return notification ? '--notification' : '';
  }

  _isWithNote(note) {
    return note !== '';
  }

  _isReadOnly(note) {
    return note !== '' ? '' : '--readonly';
  }
}

customElements.define('ag-atomic-tile', AgAtomicTile);
