import { html } from '@polymer/polymer';
import { AbstractPage } from '../../../../modules/shared/abstracts/abstract.page';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../modules/libraries/store/store';
import { navigate } from '../../../application.actions';
import { injectResourceAsyncReducer } from '../../../../modules/libraries/store/store-registry.js';

import simulatorResourceReducer from '../../../../modules/resources/simulator/reducers/simulator.reducers';
import { simulatorStateSelector } from '../../../../modules/resources/simulator/selectors/simulator.selectors';
//import { setTab } from '../../../../modules/resources/simulator/actions/simulator.actions';
import { getPreviewsResource } from '../../../../modules/resources/simulator/simulator-api.actions';

import '../../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../../modules/shared/atoms/ag-border-box';
import '../../../../modules/design-system/atoms/ag-progress-bar/ag-progress-bar';
import '../../../../modules/design-system/atoms/ag-button/ag-button';

import './screens/loader.screen';
import './screens/prolog.screen';
import './screens/story.screen';

import './simulator.page.css';

export class SimulatorPage extends connect(store)(AbstractPage) {
  
  constructor() {
    super();
    injectResourceAsyncReducer(store, 'simulator', simulatorResourceReducer);

    this.selected = null;
  }

  connectedCallback() {
    super.connectedCallback();
    store.dispatch(getPreviewsResource());
  }

  stateChanged(state) {
    this.simState = simulatorStateSelector(state);
    this.previews = this.simState.previews;
  }

  static get template() {
    return html`
      <style include="simulator-page-style"></style>

      <div class="simulator-layout">
        <div class="simulator-layout__previews">
          <template is="dom-repeat" items="[[previews]]" as="preview">
            <div class="simulator-layour__previews__preview">
              <ag-vertical-menu-item title="[[preview.title]]" 
                                     selected="[[_isSelected(selected.id, preview.id)]]"
                                     on-click="_select"
                                     data-select$="[[preview]]">
                [[preview.difficulty]]
              </ag-vertical-menu-item>
              <template is="dom-if" if="[[preview.result]]">
                <ag-progress-bar size="small" value="[[preview.result]]" max="100" color="main"></ag-progress-bar>
              </template>
            </div>
          </template>
        </div>

        <div class="simulator-layout__selected">
          <template is="dom-if" if="[[selected]]">
            <ag-border-box>
              <div class="simulator-layout__selected__box">
                <div class="simulator-layout__selected__box__top">
                  <h1>[[selected.title]]</h1>
                  <template is="dom-if" if="[[selected.result]]">
                    <div class="simulator-layout__selected__box__top__statistic">[[localize('SIMULATOR_STATISTIC')]] [[selected.result]] %</div>
                  </template>
                </div>
                <p>[[selected.description]]</p>
                <div class="simulator-layout__selected__box__button">
                  <ag-button on-action="_onNavigate">[[localize('SIMULATOR_START_GAME')]]</ag-button>
                </div>
              </div>
            </ag-border-box>
          </template>

          <template is="dom-if" if="[[!selected]]">
            <h1 class="simulator-layout__not-selected">[[localize('SIMULATOR_CHOOSE_SIMULATOR')]]</h1>
          </template>
        </div> 
      </div>
    `;
  }

  _isSelected(selectedId, id) {
    return selectedId == id;
  }

  _onNavigate() {
    store.dispatch(navigate(`/secured/simulator/${this.selected.id}`));
  }

  _select(e) {
    const select = JSON.parse(e.target.dataset.select);
    this.selected = select;
  }

}

customElements.define('simulator-page', SimulatorPage);