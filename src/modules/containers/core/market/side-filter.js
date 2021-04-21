import { connect } from 'pwa-helpers/connect-mixin';
import { html } from '@polymer/polymer';
import { store } from '../../../libraries/store/store.js';
import { AbstractContainer } from '../../../../modules/shared/abstracts/abstract.container.js';

import { getCategoriesResource, getGroupsResource } from '../../../../modules/resources/market/market-api.actions';
import { categoriesMarketResourceSelector, groupsMarketResourceSelecrtor } from '../../../../modules/resources/market/selectors/market.selectors';
import { filterAvailability, filterCategory, filterGroup } from '../../../../modules/resources/market/actions/filter.actions'; 

import '../../../../modules/design-system/atoms/ag-vertical-menu-item/ag-vertical-menu-item';

import './market-filters.css';

export class SideFilter extends connect(store)(AbstractContainer) {

    constructor() {
        super();

        this.categories = [];
        this.groups = [];

        this.selectedAvailability = null;
        this.selectedGroup = null;
        this.selectedCategory = null;
    }
  
    stateChanged(state) {
        this.categories = categoriesMarketResourceSelector(state);
        this.groups = groupsMarketResourceSelecrtor(state);
    }
  
    connectedCallback() {
        super.connectedCallback();
        
        store.dispatch(getCategoriesResource());
        store.dispatch(getGroupsResource());
    }

    static get template() {
        return html`
            <style include="market-filters-style"></style>
            <div class="side-filter">
                <h1>[[localize('SIDE_FILTER_AVAILABILITY')]]</h1>
                    <ag-vertical-menu-item title="[[localize('SIDE_FILTER_AVAILABLE')]]" 
                                           selected="[[_isSelected(selectedAvailability, 1)]]" 
                                           on-click="_onSelect" 
                                           data-value="1"
                                           data-type="availability">
                    </ag-vertical-menu-item>
                    <ag-vertical-menu-item title="[[localize('SIDE_FILTER_SOLD_OUT')]]" 
                                           selected="[[_isSelected(selectedAvailability, 0)]]" 
                                           on-click="_onSelect" 
                                           data-value="0"
                                           data-type="availability">
                    </ag-vertical-menu-item>

                <h1>[[localize('SIDE_FILTER_GROUP')]]</h1>
                    <template is="dom-repeat" items="[[groups]]" as="group">
                        <ag-vertical-menu-item title="[[group.name]]"
                                               selected="[[_isSelected(selectedGroup, group.id)]]" 
                                               on-click="_onSelect" 
                                               data-value$="[[group.id]]"
                                               data-type="group">
                        </ag-vertical-menu-item>
                    </template>

                <h1>[[localize('SIDE_FILTER_CATEGORY')]]</h1>
                <template is="dom-repeat" items="[[categories]]" as="category">
                        <ag-vertical-menu-item title="[[category.name]]"
                                               selected="[[_isSelected(selectedCategory, category.id)]]" 
                                               on-click="_onSelect" 
                                               data-value$="[[category.id]]"
                                               data-type="category">
                        </ag-vertical-menu-item>
                </template>
            </div>
        `;
    }

    _isSelected(selected, val) {
        return selected == val;
    }

    _onSelect(e) {
        const { type, value } = e.target.dataset;

        switch(type) {
            case 'availability':
                this.selectedAvailability === value ? 
                    (this.selectedAvailability = null) : 
                    (this.selectedAvailability = value); 
                    
                store.dispatch(filterAvailability(value));
            break;
            case 'group':
                this.selectedGroup === value ?
                    (this.selectedGroup = null) :
                    (this.selectedGroup = value);

                store.dispatch(filterGroup(value));
            break;
            case 'category': 
                this.selectedCategory === value ?
                    (this.selectedCategory = null) :
                    (this.selectedCategory = value);

                store.dispatch(filterCategory(value));
            break;
        }
    }
}

customElements.define('side-filter', SideFilter);