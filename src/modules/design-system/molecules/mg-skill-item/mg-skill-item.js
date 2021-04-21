import { html, PolymerElement } from '@polymer/polymer';

import './mg-skill-item.css';
import './../../atoms/ag-progress-bar/ag-progress-bar';
import '../../atoms/ag-icon/ag-icon';

export class MgSkillItem extends PolymerElement {

  static get properties() {
    return {
      data: {
        type: Object
      },
      icon: {
        type: String,
        value: 'mg-main-menu:base'
      },
      size: {
        type: String,
        value: 'primary'
      },
      color: {
        type: String,
        value: 'product'
      },
      disabled: {
        type: Boolean,
        value: false
      },
      selected: {
        type: Boolean,
        value: false
      }
    }
  }

  static get template() {
    return html`
      <style include="mg-skill-item-style"></style>
      
      <div class$="skill-item skill-item--[[size]] skill-item--[[color]]"
           selected$="[[selected]]"
           disabled$="[[disabled]]"
           on-click="_onItemClick"
           on-keydown="_onItemClick"
           tabindex$="{{_onTabIndex(disabled)}}">
        <div class="skill-item__block">
        
          <div class="skill-item__info__row">
            <div class$="skill-item__info__row__icon skill-item__info__row__icon--[[color]]"
                 disabled$="[[disabled]]">
              <ag-icon class="skill-item__info__row__icon__tile"
                       icon$="[[icon]]">
              </ag-icon>
            </div>
            
            <div class$="skill-item__info__text skill-item__info__text--[[color]]"
                 disabled$="[[disabled]]">
              <span class="skill-item__info__text__title"
                    selected$="[[selected]]">
                [[data.title]]
              </span>
              <div class="skill-item__info__text__subtitle">
                <span class="skill-item__info__text__subtitle__level">Level [[data.level]]</span> 
                | 
                <span class="skill-item__info__text__subtitle__experiences">[[data.experiences]] / [[data.max]]</span>
              </div>
            </div>
          </div> 
          
          <ag-progress-bar disabled="[[disabled]]"
                           class="skill-item__progress-bar"
                           size="tiny"
                           value="[[data.experiences]]"
                           max="[[data.max]]"
                           color="[[color]]">
          </ag-progress-bar>
          <ag-progress-bar disabled="[[disabled]]"
                           size="{{_onProgressBarSize(size)}}"
                           value="[[data.level]]"
                           color="[[color]]">
          </ag-progress-bar>
          
        </div>
      </div>
    `;
  }

  _onItemClick(e) {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('action'));
    }
  }

  _onTabIndex(disabled) {
    return disabled ? -1 : 0;
  }

  _onProgressBarSize(size) {
    return size === 'primary' ? 'big' : 'normal';
  }

}

customElements.define('mg-skill-item', MgSkillItem);
