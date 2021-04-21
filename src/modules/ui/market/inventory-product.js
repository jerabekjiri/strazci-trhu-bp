import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';
import { AbstractContainer } from '../../../modules/shared/abstracts/abstract.container.js';
import { store } from '../../../modules/libraries/store/store';
import { groupTypeToSentence } from '../../../modules/utils/market.fnc';
import { activateInventoryProductResource } from '../../../modules/resources/market/market-api.actions';
import * as moment from 'moment';

import '../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../modules/shared/atoms/ag-border-box';

import './inventory-product.css';

export class InventoryProduct extends connect(store)(AbstractContainer) {
  static get properties() {
    return {
        product: {
            type: Object,
            reflectToAttribute: true,
            notify: true	
        },
        inventory: {
            type: Object,
            reflectToAttribute: true,
            notify: true
        }
    }
  }

  constructor() {
    super();
    this.groupTypeToSentence = null;      
    this.daysLeft = null;
}
  
  connectedCallback() {
    super.connectedCallback();

    this.groupTypeToSentence = groupTypeToSentence(this.product.group);

    this.daysLeft = this._remainingUsabilityDays(this.product.daysUsability, this.inventory.createdDate);
  }


  static get template() {
    return html`
        <style include="inventory-product-style"></style>

        <ag-border-box>
            <div class="inventory-product__box">
                <div class="inventory-product__box__content">
                    <div class="inventory-product__box__content__left">
                        <img src="[[product.img]]" class="inventory-product__box__content__left__img" />
                        <span class="inventory-product__box__content__left__group-type">
                            {{localize(groupTypeToSentence)}}
                        </span>
                    </div>
                    <div class="inventory-product__box__content__right">
                        <h2>[[product.title]]</h2>
                        <span>[[product.category.name]]</span>
                        <p>[[product.description]]</p>
                    </div>
                </div>
                <div class="inventory-product__box__bottom">
                    <template is="dom-if" if="[[inventory.activated]]">
                        <span class="inventory-product__box__bottom__activated">Předmět byl již aktivován</span>
                    </template>
                    <template is="dom-if" if="[[!inventory.activated]]">
                        <template is="dom-if" if="[[!_isTimeLimited(product.daysUsability)]]">
                            <span>[[localize('INVENTORY_PRODUCT_PERMAMENT')]]</span>
                        </template>

                        <template is="dom-if" if="[[_isTimeLimited(product.daysUsability)]]">
                            <span>Předmět již není možné aktivovat</span>
                        </template>

                        <template is="dom-if" if="[[_isTimeLimited(product.daysUsability)]]">
                            <template is="dom-if" if="[[_isInLimit(daysLeft)]]">
                                <span>[[localize('INVENTORY_PRODUCT_TEMP', 'days', daysLeft)]]</span>
                            </template>
                        </template>

                        <ag-button type="secondary" 
                                   on-click="_activateProduct" 
                                   class="inventory-product__box__bottom__button"
                                   disabled="[[!_isInLimit(daysLeft)]]">
                            
                            <span class="inventory-product__box__bottom__button__price">
                                [[localize('INVENTORY_PRODUCT_ACTIVATE')]]
                            </span>
                        </ag-button>
                    </template>
                </div>
            </div>
        </ag-border-box>
    `
  }
  _activateProduct() {
    store.dispatch(activateInventoryProductResource(this.inventory.id));
  }

  _isTimeLimited(daysUsability) {
    return !!daysUsability;
  }

  _isInLimit(daysLeft) {
    return daysLeft > 0 ? true : false;
  }

  _remainingUsabilityDays(daysUsability, createdDate) {
    if(!daysUsability)
        return;   

    const endOfUsabilityDate = moment.default(new Date(createdDate), 'MM/DD/YYYY').add(daysUsability, 'day').format();

    const today = moment.default().format();
    const remainingDays = moment.default(endOfUsabilityDate).diff(today, 'days');

    return remainingDays;   
  }   
}

customElements.define('inventory-product', InventoryProduct);