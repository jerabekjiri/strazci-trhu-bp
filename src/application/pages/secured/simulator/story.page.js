import { html } from '@polymer/polymer';
import { AbstractPage } from '../../../../modules/shared/abstracts/abstract.page';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../modules/libraries/store/store';
import { navigate } from '../../../application.actions';
import { injectResourceAsyncReducer } from '../../../../modules/libraries/store/store-registry.js';
import * as R from 'ramda';
import simulatorResourceReducer from '../../../../modules/resources/simulator/reducers/simulator.reducers';
import { simulatorStateSelector } from '../../../../modules/resources/simulator/selectors/simulator.selectors';
import { setLoading, setStory, setProlog, setSummarry } from '../../../../modules/resources/simulator/actions/simulator.actions';
import { getSimulatorResource } from '../../../../modules/resources/simulator/simulator-api.actions';

import '../../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../../modules/shared/atoms/ag-border-box';
import '../../../../modules/design-system/atoms/ag-progress-bar/ag-progress-bar';
import '../../../../modules/design-system/atoms/ag-button/ag-button';
import '../../../../modules/design-system/atoms/ag-loader/ag-loader';

import './screens/loader.screen';
import './screens/prolog.screen';
import './screens/story.screen';
import './screens/summary.screen';

export class StoryPage extends connect(store)(AbstractPage) {
  
  constructor() {
    super();
    
    injectResourceAsyncReducer(store, 'simulator', simulatorResourceReducer);

    this.storyLoading = null;
    this.storyProlog = null;
    this.story = null;
  }

  connectedCallback() {
    super.connectedCallback();
    const id = this.location.params.id;
    store.dispatch(getSimulatorResource(id));
  }

  stateChanged(state) {
    this.simState = simulatorStateSelector(state);
    this.selectedTab = this.simState.selectedTab;
  }

  static get observers() {
    return [
      '$simulatorLoadedSuccess(simState.selectedSimulator, selectedTab)'
    ]
  }

  $simulatorLoadedSuccess(selectedSimulator) {
    if(!R.isEmpty(selectedSimulator)) {
      this.storyLoading = selectedSimulator.story.loading;
      this.storyProlog = selectedSimulator.story.prolog;
      this.story = selectedSimulator.story.story;  
    }
  }

  static get template() {
    return html`
      <template is="dom-if" if="[[_isLoading(storyLoading, storyProlog, story)]]">
        <div class="story-simulator-page">
          <template is="dom-if" if="[[_selectedTab(simState.selectedTab, 'LOADING')]]">
            <loader-screen-simulator 
              messages="[[storyLoading]]">
            </loader-screen-simulator>
          </template>

          <template is="dom-if" if="[[_selectedTab(simState.selectedTab, 'PROLOG')]]">
            <prolog-screen-simulator
              prolog="[[storyProlog]]">
            </prolog-screen-simulator>
          </template>

          <template is="dom-if" if="[[_selectedTab(simState.selectedTab, 'STORY')]]">
            <story-screen-simulator 
              story="[[story]]">
            </story-screen-simulator>
          </template>

          <template is="dom-if" if="[[_selectedTab(simState.selectedTab, 'SUMMARY')]]">
            <summarry-screen-simulator>
            </summarry-screen-simulator>
          </template>
        </div>
      </template>
    `;
  }
    
  _selectedTab(selectedTab, tab) {
    return selectedTab === tab;
  }

  _isLoading(loading, prolog, story) {
    return R.empty(loading);
  }
}

customElements.define('story-page', StoryPage);