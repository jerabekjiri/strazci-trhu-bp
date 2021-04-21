import { html } from '@polymer/polymer';
import { AbstractComponent } from '../../../../../modules/shared/abstracts/abstract.component';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../modules/libraries/store/store';
import { setSummarry, setRating, setFailedSimulator, initSimulator } from '../../../../../modules/resources/simulator/actions/simulator.actions';
import { setFinalRatingResource } from '../../../../../modules/resources/simulator/simulator-api.actions'; 

import '../../../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../../../modules/shared/atoms/ag-border-box';
import '../../../../../modules/design-system/atoms/ag-progress-bar/ag-progress-bar';
import '../../../../../modules/design-system/atoms/ag-vertical-menu-item/ag-vertical-menu-item';
import '../../../../../modules/design-system/atoms/ag-horizontal-menu-item/ag-horizontal-menu-item';

import './screens.css'; 

import * as R from 'ramda';
import { getFromToken } from '../../../../../modules/utils/getFromToken.fnc';

export class StoryScreen extends connect(store)(AbstractComponent) {
    static get properties() {
      return {
        story: Array
      }
    }

    connectedCallback() {
      super.connectedCallback();

      this.gradualStory = [];

      this.interval = 1000;

      this.isFinishedScreen = false;

      this.gradualStory = [ ...this.story];
      
      this.selectedScreen = {};

      this.graduallyFadeIn(this.gradualStory.shift());
      
      this.rating = [];
    }

    graduallyFadeIn(selectedScreen) {
      this.isFinishedScreen = false;

      if(R.isNil(selectedScreen.prolog)) {
        this.isFinishedScreen = true;
        return;
      }
    
      let { sentences } = selectedScreen.prolog;
    
      this.selectedScreen = {
        ...selectedScreen,
        prolog: {
          ...selectedScreen.prolog,
          sentences: [sentences.shift()]
        }
      };

      if (R.isEmpty(sentences)) {
        setTimeout(() => this.isFinishedScreen = true, this.interval)
        return;
      }

      const fadeInInterval = setInterval(() => {
          
        this.isFinishedScreen = false;
        
        this.selectedScreen = { 
          ...this.selectedScreen,
          prolog: { 
            ...selectedScreen.prolog,
            sentences: [...this.selectedScreen.prolog.sentences, sentences.shift()] 
          }
        };

        if(sentences.length <= 0) {
          clearInterval(fadeInInterval);
          setTimeout(() => this.isFinishedScreen = true, this.interval);
        }
      }, this.interval)
    }

    _replaceWithVariables(sentence) {
      return sentence.replace('{{user}}', `${getFromToken('firstName')} ${getFromToken('lastName')}`);
    }

    findScreenByRef(refId) {
      return this.story.find(screen => screen.id == refId);
    }

    static get template() {
      return html`
        <style include="screens-simulator-style"></style>
        <div class="story">
          <ag-border-box>
            <div class="box">
              <div class="story-screen__box__top">
                <template is="dom-if" if="[[_isType(selectedScreen.prolog.type, 'notice')]]">
                  [[localize('SIMULATOR_PLAYER_TALK')]]:
                </template>
                <template is="dom-if" if="[[_isType(selectedScreen.prolog.type, 'answer')]]">
                  [[localize('SIMULATOR_ANSWER')]]:
                </template>
              </div>
              <template is="dom-repeat" items=[[selectedScreen.prolog.sentences]] as="text" mutable-data>
                <div class$="message [[_isFinishError(selectedScreen.finish)]]">
                  [[text.sentence]]
                </div>
              </template>
            </div>
          </ag-border-box>

          <template is="dom-if" if="[[isFinishedScreen]]"> 
            <ag-border-box>
              <div class="actions">
                <template is="dom-if" if="[[_isActions(selectedScreen.actions)]]">
                  <template is="dom-repeat" items=[[selectedScreen.actions.sentences]] as="button" mutable-data>
                    <div class="item">
                      <ag-vertical-menu-item on-click="_onAction" 
                                             data-action$="[[button]]"
                                             data-ref-id="[[button.refId]]">
                        [[_replaceWithVariables(button.sentence)]]
                      </ag-vertical-menu-item>
                    </div>
                  </template>
                </template>
              </div>
            </ag-border-box>

            <template is="dom-if" if="[[!_isActions(selectedScreen.actions)]]">
              <div class="default__item">
                <ag-horizontal-menu-item on-click="_onNext" 
                                         data-ref-id$="[[selectedScreen.refId]]">
                  [[localize('SIMULATOR_NEXT_BUTTON')]]
                </ag-horizontal-menu-item>
              </div>
            </template>
          <template>   
        </div>
        `;
      }
    
    _onAction(e) {
      const action = JSON.parse(e.target.dataset.action);

      let refId;

      if(action.refId)
        refId = action.refId;
      else 
        refId = this.selectedScreen.refId;
  
      this.graduallyFadeIn(
        this.findScreenByRef(refId)
      );

      if('value' in action) {
        const _rating = {
          id: this.selectedScreen.id,
          value: Number(action.value)
        };
        store.dispatch(setRating(_rating));
      }
     
    }

    _isType(selectedType, type) {
      return selectedType === type;
    }

    _onNext(e) {
      const { refId } = e.target.dataset;

      const hasFinish = R.has('finish');

      if(hasFinish(this.selectedScreen)) {
        if(this.selectedScreen.finish === 'success')
          store.dispatch(setFinalRatingResource());
        else if(this.selectedScreen.finish === 'error')
          store.dispatch(setFailedSimulator());

        store.dispatch(setSummarry());
      }

      if(refId) {
        const nextScreen = this.findScreenByRef(refId);
        this.graduallyFadeIn(nextScreen);
      }
    }

    _isActions(actions) {
      return !!actions;
    }

    _isFinishError(finished) {
      if(finished) 
        return finished === 'error' ? 'sentence-error' : '';
    }
}
    
customElements.define('story-screen-simulator', StoryScreen);
