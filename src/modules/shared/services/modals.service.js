import { store } from '../../libraries/store/store';
import { navigate } from '../../../application/application.actions';

import * as R from 'ramda';

export class ModalsService {

  constructor(application) {
    this.application = application;

    /*
    window.addEventListener('vaadin-router-location-changed', event => {
      var searchParams = new URLSearchParams(event.detail.location.search);
      
      if (searchParams.get('modal')) {
        const modal = document.createElement('base-modal');
        modal.setAttribute('type', searchParams.get('modal'));
        modal.addEventListener('close-modal', () => this._removeModal(searchParams))
        application.shadowRoot.appendChild(modal);
      } else {
        this._removeModal(searchParams);
      }
    });
    */
  }

  stateChanged(state) {
    if(!R.isNil(state.entity.market) && !R.isNil(state.entity.market.selectedProduct)) {
      const modal = document.createElement('base-modal');
      modal.setAttribute('type', 'MARKET_PRODUCT');
      modal.addEventListener('close-modal', () => this._removeModal())
      this.application.shadowRoot.appendChild(modal);
    }
  }

  _removeModal() {
    const baseModal = this.application.shadowRoot.querySelector('base-modal');
    if (baseModal) {
      this.application.shadowRoot.removeChild(baseModal);
    }
  }
}