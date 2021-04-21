import { html } from '@polymer/polymer';
import { AbstractComponent } from '../../../../../modules/shared/abstracts/abstract.component';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../modules/libraries/store/store';
import { setStory } from '../../../../../modules/resources/simulator/actions/simulator.actions';

import '../../../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../../../modules/shared/atoms/ag-border-box';
import '../../../../../modules/design-system/atoms/ag-progress-bar/ag-progress-bar';
import '../../../../../modules/design-system/atoms/ag-horizontal-menu-item/ag-horizontal-menu-item';

import './screens.css'; 

import * as R from 'ramda';

export class PrologScreen extends connect(store)(AbstractComponent) {
    static get properties() {
        return {
            prolog: Array
        }
    }

    connectedCallback() {
      super.connectedCallback();

      this.gradualProlog = [];

      this.interval = 1000;

      this.isFinishedProlog = false;

      this.graduallyFadeIn([ ...this.prolog ]);
    }

    graduallyFadeIn(prolog) {
      this.gradualProlog = [prolog.shift()];

      const fadeInInterval = setInterval(() => {
        
        const message = prolog.shift();

        this.gradualProlog = [...this.gradualProlog, message];

        if(R.isEmpty(prolog)) {
          clearInterval(fadeInInterval);
          setTimeout(() => this.isFinishedProlog = true, this.interval);
        }
      }, this.interval)
    }

  static get template() {
    return html`
      <style include="screens-simulator-style"></style>

      <div class="prolog">
        <ag-border-box>
          <div class="box">
            <template is="dom-repeat" items="[[gradualProlog]]">
              <div class="message">
                [[item]]
              </div>
            </template>
          </div>
        </ag-border-box>
        <template is="dom-if" if="[[isFinishedProlog]]">
          <div class="actions">
            <div class="item">
              <ag-horizontal-menu-item on-click="_onNext">
                [[localize('SIMULATOR_NEXT_BUTTON')]]
              </ag-horizontal-menu-item>
            </div>
          </div>
        </template>
      </div>
    `;
  }

  _onNext() {
    store.dispatch(setStory());
  }
}
    
customElements.define('prolog-screen-simulator', PrologScreen);
