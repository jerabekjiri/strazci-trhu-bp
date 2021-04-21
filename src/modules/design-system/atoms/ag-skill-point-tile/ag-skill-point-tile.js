import { html, PolymerElement } from '@polymer/polymer';

import '../ag-icon/ag-icon';

import './ag-skill-point-tile.css';

export class AgSkillPointTile extends PolymerElement {

  static get properties() {
    return {
      color: {
        type: String,
        value: 'main'
      },
      icon: {
        type: String,
        value: 'mg-main-menu:base'
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-skill-point-tile-style"></style>
      
      <div class$="skill-point-tile skill-point-tile--[[color]]">
        <ag-icon class="skill-point-tile__icon" size="{{_onIconSize(color)}}" color="[[color]]" icon$="{{icon}}"></ag-icon>
        <slot></slot>
        <slot name="suffix"></slot>
      </div>
    `;
  }

  _onIconSize(color) {
    return color === 'main' ? 'small' : 'tiny' ;
  }
}

customElements.define('ag-skill-point-tile', AgSkillPointTile);
