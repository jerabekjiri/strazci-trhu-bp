import { AbstractContainer } from '../../../../modules/shared/abstracts/abstract.container.js';
import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../modules/libraries/store/store';
import { filterActivated } from '../../../resources/market/actions/filter.actions';
import { MarketFiltersEnum } from '../../../enums/market-filters.js';

import '../../../../modules/design-system/atoms/ag-vertical-menu-item/ag-vertical-menu-item';

import './market-filters.css';

export class InventoryFilter extends connect(store)(AbstractContainer) {
  constructor() {
    super();

    this.inventoryFiltersEnum = MarketFiltersEnum;

    this.selectActivated = null;
  }
  
  static get template() {
    return html`
      <style include="market-filters-style"></style>
      <div class="inventory-filter">
        <div class="item__box">
          <h1>[[localize('INVENTORY_FILTER_AVAILABLE')]]</h1>
          <ag-vertical-menu-item title="[[localize('INVENTORY_FILTER_NOT_ACTIVATED')]]" 
                                  selected="[[_isSelected(selectActivated, inventoryFiltersEnum.NOT_ACTIVATED)]]" 
                                  on-click="_onSelect" 
                                  data-value$="[[inventoryFiltersEnum.NOT_ACTIVATED]]">
          </ag-vertical-menu-item>
          <ag-vertical-menu-item title="[[localize('INVENTORY_FILTER_ACTIVATED')]]" 
                                  selected="[[_isSelected(selectActivated, inventoryFiltersEnum.ACTIVATED)]]" 
                                  on-click="_onSelect" 
                                  data-value$="[[inventoryFiltersEnum.ACTIVATED]]">
          </ag-vertical-menu-item>
        </div>
      </div>
    `
  }

  _onSelect(e) {
    const { value } = e.target.dataset;
    this.selectActivated = this.selectActivated === value ? 
      (this.selectActivated = null) :
      (this.selectActivated = value);

    store.dispatch(filterActivated(this.selectActivated));
  }

  _isSelected(selected, value) {
    return selected === value;
  }

}

customElements.define('inventory-filter', InventoryFilter);

  