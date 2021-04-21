import { html } from '@polymer/polymer';
import { AbstractComponent } from '../../../shared/abstracts/abstract.component';
import * as moment from 'moment'

import '../../../design-system/atoms/ag-progress-bar/ag-progress-bar';
import '../../../design-system/atoms/ag-icon/ag-icon';

import './player-profile.css';
import { getFromToken } from '../../../utils/getFromToken.fnc';

export class PlayerProfile extends AbstractComponent {

  static get properties() {
    return {
      data: {
        type: Object,
        value: {}
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.weekOfPlaying = moment.default().diff(moment.default(getFromToken('registerDate')), 'week');
    this.firstName = getFromToken('firstName');
    this._setIconsSize(window.innerWidth);
  }

  sizeChanged() {
    super.sizeChanged();
    this._setIconsSize(window.innerWidth);
  }

  static get template() {
    return html`
      <style include="player-profile-style"></style>
      <div class="player-profile">
        <div class="player-profile__avatar">
          <div class="player-info">
            <div class="player-info__name">
              {{firstName}}
            </div>
            <div class="player-info__group">
              <div>
                {{localize('PLAYER_PROFILE_LEVEL', 'level', data.level)}}
              </div>
              <div>
                {{localize('PLAYER_PROFILE_WEEK_OF_PLAYING', 'week', weekOfPlaying)}}
              </div>
            </div>
          </div>
        </div>
        <div class="player-profile__content">
          <div class="player-profile__content__experiences">
            <ag-icon icon="mg-game:experiences" size="small">
            </ag-icon>
            <ag-progress-bar size="small" value="30" max="100" color="main">
            </ag-progress-bar>
            <div class="player-profile__content__experiences__label">
              {{data.experiencesRangeFrom}} / {{data.experiencesRangeTo}}
            </div>
          </div>
          <div class="player-profile__content__resources">
            <div class="resource">
              <ag-icon icon="mg-resource:analysis" size="[[iconSizes]]">
              </ag-icon>
              <span class="resource__label">
                {{localize('PLAYER_PROFILE_ANALYSIS')}}
              </span>
              <span class="resource__content">
                {{data.analysis}}
              </span>
            </div>

            <div class="resource">
              <ag-icon icon="mg-resource:contacts" size="[[iconSizes]]">
              </ag-icon>
              <span class="resource__label">
                {{localize('PLAYER_PROFILE_CONTACTS')}}
              </span>
              <span class="resource__content">
                {{data.contacts}}
              </span>
            </div>

            <div class="resource">
              <ag-icon icon="mg-resource:addressing" size="[[iconSizes]]">
              </ag-icon>
              <span class="resource__label">
                {{localize('PLAYER_PROFILE_ADDRESSING')}}
              </span>
              <span class="resource__content">
                {{data.addressing}}
              </span>
            </div>

            <div class="resource">
              <ag-icon icon="mg-resource:consulting" size="[[iconSizes]]">
              </ag-icon>
              <span class="resource__label">
                {{localize('PLAYER_PROFILE_CONSULTING')}}
              </span>
              <span class="resource__content">
                {{data.consulting}}
              </span>
            </div>

            <div class="resource">
              <ag-icon icon="mg-resource:service" size="[[iconSizes]]">
              </ag-icon>
              <span class="resource__label">
                {{localize('PLAYER_PROFILE_SERVICES')}}
              </span>
              <span class="resource__content">
                {{data.services}}
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _setIconsSize(innerWidth) {
    if (innerWidth < 1340 || this.isPhone) {
      this.iconSizes = 'normal';
    } else {
      this.iconSizes = 'large';
    }
  }
}

customElements.define('player-profile', PlayerProfile);