import { html } from '@polymer/polymer';
import { AbstractComponent } from '../../../shared/abstracts/abstract.component';
import * as R from 'ramda';

import './top-game-status.css';

export class TopGameStatus extends AbstractComponent {

  constructor() {
    super();
    this.HIGHLIGHT_DELAY = 2000;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        value: {},
        observer: '$onDataChange'
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static get template() {
    return html`
      <style include="top-game-status-style"></style>
      <div class="top-game-status">
        <div class="top-game-status__block">
          <ag-icon icon="mg-game:level">
          </ag-icon>
          <span class="top-game-status__block__label">
            {{localize('LEVEL')}}
          </span>
        </div>
      
        <div class="top-game-status__block">
          <ag-icon icon="mg-game:experiences">
          </ag-icon>
          <span id="experiences"
                class="top-game-status__block__label">
            {{data.experiences}} / {{data.experiencesRangeTo}}
          </span>
        </div>

        <div class="top-game-status__block">
          <ag-icon icon="mg-game:money">
          </ag-icon>
          <span id="currency"
                class="top-game-status__block__label">
            {{data.currency}}
          </span>
        </div>
      </div>
    `;
  }

  $onDataChange(next, prev) {
    if (!R.isNil(next) && !R.isNil(prev)) {
      if (next.experiences !== prev.experiences) {
        this._highlightValues(this.shadowRoot.querySelector('#experiences'));
      }

      if (next.currency !== prev.currency) {
        this._highlightValues(this.shadowRoot.querySelector('#currency'));
      }
    }
  }

  _highlightValues(element) {
    element.style.transition = 'none';
    element.style.color = 'var(--warning)';

    setTimeout(() => {
      element.style.transition = "all 3s";
      element.style.color = 'var(--main-light)';
    });
  }

}

customElements.define('top-game-status', TopGameStatus);