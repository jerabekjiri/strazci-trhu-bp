import { connect } from 'pwa-helpers/connect-mixin';
import { html } from '@polymer/polymer';
import { AbstractContainer } from '../../../shared/abstracts/abstract.container';
import { store } from '../../../../modules/libraries/store/store';
import { applySort } from "../../../../modules/resources/market/actions/filter.actions";
import { MarketFiltersEnum } from '../../../enums/market-filters';

import '../../../../modules/design-system/atoms/ag-horizontal-menu-item/ag-horizontal-menu-item';

import './market-filters.css';

export class TopFilter extends connect(store)(AbstractContainer) {
  constructor() {
    super();

    this.filters = Object.keys(MarketFiltersEnum).map(key => key).slice(0, 4);
  
    this.selectedFilter = MarketFiltersEnum.POPULAR;
  }

  connectedCallback() {
    super.connectedCallback();

    store.dispatch(applySort(this.selectedFilter));
  }

  static get template() {
    return html`
      <style include="market-filters-style"></style>

      <div class="top-filter">
        <div class="top-filter__items">
          <template is="dom-repeat" items="[[filters]]">
            <div class="top-filter__items__item">
              <ag-horizontal-menu-item selected="[[_isSelected(item, selectedFilter)]]" 
                                       on-click="_onSelect" 
                                       data-filter$="[[item]]">
                [[localize(item)]]
              </ag-horizontal-menu-item>
            </div>
          </template>
        </div>
      </div>
    `;
  }

  _onSelect(e) {
    this.selectedFilter = e.target.dataset.filter;
    store.dispatch(applySort(this.selectedFilter));
  }

  _isSelected(filter, selectedFilter) {
    return filter === selectedFilter;
  }
}

customElements.define('top-filter', TopFilter);