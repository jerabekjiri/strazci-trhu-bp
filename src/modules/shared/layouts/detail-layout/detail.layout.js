import { html } from '@polymer/polymer';

import { AbstractComponent } from '../../abstracts/abstract.component';

import './detail.css';

export class DetailLayout extends AbstractComponent {

  constructor() {
    super();
  }

  static get template() {
    return html`
      <style include="detail-layout-style"></style>
      <div class="detail-layout">
        <div class="detail-layout__actions">
          <div class="detail-layout__actions__action-back"
               on-click="_goBack">
            <div>
              <iron-icon icon="icons:arrow-back"></iron-icon>
            </div>
            <div>
              {{localize('BACK')}}
            </div>
          </div>
        </div>
        <div class="detail-layout__content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  _goBack(e) {
    this.dispatchEvent(new CustomEvent('action-back'))
  }
}

customElements.define('detail-layout', DetailLayout);