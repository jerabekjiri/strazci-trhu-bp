import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';
import { AbstractPage } from '../../../../../modules/shared/abstracts/abstract.page.js';
import { store } from '../../../../../modules/libraries/store/store';
import { inventoryMarketResourceSelector, inventoryStateSelector } from '../../../../../modules/resources/market/selectors/market.selectors';
import { NotificationProvider } from '../../../../../modules/shared/providers/notification.provider.js';
import { getInventoryResource } from '../../../../../modules/resources/market/market-api.actions';
import * as R from 'ramda';

import '../../../../../modules/shared/atoms/ag-border-box';
import '../../../../../modules/ui/market/inventory-product';
import '../../../../../modules/design-system/atoms/ag-loader/ag-loader';
import '../../../../../modules/containers/core/market/inventory-filter.js';

import './inventory.page.css';

export class InventoryPage extends connect(store)(AbstractPage) {
    constructor() {
        super();

        this.notificationProvider = new NotificationProvider();

        this.inventoryState = [];
    }

    connectedCallback() {
      super.connectedCallback();

      store.dispatch(getInventoryResource());
    }

    stateChanged(state) {
      this.inventoryState = inventoryStateSelector(state);
      this.products = inventoryMarketResourceSelector(state);
    }

    static get observers() {
      return [
        '$activatedProductSuccess(inventoryState.activatedProductSuccess)',
        '$activatedProductFailed(inventoryState.error)'
      ]
    }

    $activatedProductSuccess(success) {
      !!success && this.notificationProvider.showSuccessMessage(
          this.localize('INVENTORY_ACTIVATED_PRODUCT_SUCCESS_MESSAGE')
        );
    }

    $activatedProductFailed(error) {
      !!error && this.notificationProvider.showErrorMessage(
        this.localize('INVENTORY_ACTIVATED_PRODUCT_ERROR_MESSAGE')
      );
    }

  static get template() {
    return html`
    <style include="inventory-page-style"></style>

    <template is="dom-if" if="[[inventoryState.isLoading]]">
      <ag-loader></ag-loader>
    </template>

    <template is="dom-if" if="[[!inventoryState.isLoading]]">

      <template is="dom-if" if="[[_isEmpty(inventoryState.inventory)]]">
        <h1 class="inventory-page__title">[[localize('INVENTORY_EMPTY')]]</h1>
      </template>
      
      <template is="dom-if" if="[[!_isEmpty(inventoryState.inventory)]]">
        <inventory-filter></inventory-filter>
        <div class="items">
          
          <template is="dom-repeat" items="[[products]]" mutable-data> 
            <inventory-product 
              product="[[item.product]]" 
              inventory="[[item]]">
            </inventory-product>
          </template>

        </div>
      </template>

    </template>
    `
  }

  _isEmpty(products) {
    return R.isEmpty(products);
  }
}

customElements.define('inventory-page', InventoryPage);