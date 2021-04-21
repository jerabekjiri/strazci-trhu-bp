import { html } from '@polymer/polymer';
import { AbstractComponent } from '../../../../../modules/shared/abstracts/abstract.component';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../modules/libraries/store/store';
import { simulatorStateSelector } from '../../../../../modules/resources/simulator/selectors/simulator.selectors';

import '../../../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../../../modules/shared/atoms/ag-border-box';
import '../../../../../modules/design-system/atoms/ag-progress-bar/ag-progress-bar';
import '../../../../../modules/design-system/atoms/ag-horizontal-menu-item/ag-horizontal-menu-item';

import './screens.css'; 
import { initSimulator, setStory, setProlog, initRating } from '../../../../../modules/resources/simulator/actions/simulator.actions';
import { setFinalRatingResource } from '../../../../../modules/resources/simulator/simulator-api.actions';
import { maxAchievableRating, achievedRatingPercentage, achievedRating } from '../simulator.fnc';
import { navigate } from '../.././../../application.actions';

export class SummarryScreen extends connect(store)(AbstractComponent) {

  constructor() {
    super();
    this.achieved = null;
    this.max = null;
    this.achievedPercentage = null;
  }

  stateChanged(state) {
    this.simState = simulatorStateSelector(state);

    !this.simState.error && this.countSuccess(this.simState.rating);
  }

  countSuccess(rating) {
    this.achieved = achievedRating(rating);
    this.max = maxAchievableRating(rating);
    this.achievedPercentage = achievedRatingPercentage(rating).toFixed();
  }

  static get template() {
    return html`
      <style include="screens-simulator-style"></style>
      <style>
        h1 {
            color: var(--main);
        }
      </style>

      <div class="summary-screen">
        <ag-border-box>
          <div class="box">
            <template is="dom-if" if="[[!simState.error]]">
              <h1>
                [[localize('SIMULATOR_SUMMARY_SCREEN_SUCCESS')]] 
                [[achievedPercentage]] %
              </h1> 
              <ag-progress-bar size="small" 
                               value="[[achieved]]" 
                               max="[[max]]" 
                               color="main">
              </ag-progress-bar>     
              <template is="dom-if" if="[[_isPerfect(achievedPercentage)]]">
                <p>  [[localize('SIMULATOR_SUMMARY_SCREEN_PERFECT_MSG_1')]]</p>
                <p>  [[localize('SIMULATOR_SUMMARY_SCREEN_PERFECT_MSG_2')]]</p>
                <p>  [[localize('SIMULATOR_SUMMARY_SCREEN_PERFECT_MSG_3')]]</p>
                <p>  [[localize('SIMULATOR_SUMMARY_SCREEN_PERFECT_MSG_4')]]</p>
                  <ag-button on-action="_onBack" type="tertiary">
                    [[localize('SIMULATOR_SUMMARY_SCREEN_BACK')]]
                  </ag-button> 
              </template>

              <template is="dom-if" if="[[!_isPerfect(achievedPercentage)]]">
                <p>[[localize('SIMULATOR_SUMMARY_SCREEN_SUCCESS_MSG_1')]]</p>
                <p>  [[localize('SIMULATOR_SUMMARY_SCREEN_SUCCESS_MSG_2')]]</p>
                <p>  [[localize('SIMULATOR_SUMMARY_SCREEN_SUCCESS_MSG_3')]]</p>
                  <ag-button on-action="_onNavigate" type="tertiary">
                    [[localize('SIMULATOR_SUMMARY_SCREEN_REPEAT')]]
                  </ag-button>
              </template>
            </template>

            <template is="dom-if" if="[[simState.error]]">
              <div class="summary-screen__box__error-screen">
                <h1 class="summary-screen__box__error-screen__title">
                  [[localize('SIMULATOR_SUMMARY_ERROR')]]
                </h1>
                <p>[[localize('SIMULATOR_SUMMARY_NOT_SAVED')]]</p>
                <div class="summary-screen__box__error-screen__buttons">
                  <ag-button on-action="_onBack" type="tertiary">[[localize('SIMULATOR_SUMMARY_SCREEN_BACK')]]</ag-button>
                  <ag-button on-action="_onNavigate" type="tertiary">[[localize('SIMULATOR_SUMMARY_SCREEN_REPEAT')]]</ag-button>
                </div>
              </div>
            </template>
          </div>
        </ag-border-box>
      </div>
    `;
  }

  _isPerfect(val) {
    return Number(val) === 100;
  }

  _onNavigate() {
    const { id } = this.simState.selectedSimulator;
    store.dispatch(initRating());
    store.dispatch(navigate(`/secured/simulator/${id}`)); 
  }

  _onBack() {
    store.dispatch(navigate('/secured/simulator'));
    store.dispatch(initSimulator());
  }
}
    
customElements.define('summarry-screen-simulator', SummarryScreen);
