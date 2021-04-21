import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';
import { AbstractContainer } from '../../../modules/shared/abstracts/abstract.container.js';
import { store } from '../../../modules/libraries/store/store';

import '../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../modules/shared/atoms/ag-border-box';

import { navigate } from '../../../application/application.actions';
import { ModalsEnum } from '../../../modules/enums/modals'; 
import { selectProductModal }  from '../../../modules/resources/market/actions/modal.actions';
import { availableDateFormat } from '../../../modules/utils/market.fnc';  


import './market-product.css';

export class MarketProduct extends connect(store)(AbstractContainer) {
  static get properties() {
    return {
        product: {
            type: Object,
            reflectToAttribute: true,
            notify: true	
        }
    }
  }

  static get template() {
    return html`
        <style include="market-product-style"></style>
        <ag-border-box type="full" on-click="_onOpenModal">
            <div class="market-product__box">
                <img src="[[product.img]]" class="market-product__box__img" />
                <div class="market-product__box__content">
                    <span>[[product.category.name]]</span>
                    <h2>[[product.title]]</h2>
                    <p>[[product.description]]</p>
                </div>
                <div class="market-product__box__bottom">
                    
                    <template is="dom-if" if="[[!product.owned]]">
 
                        <template is="dom-if" if="[[_isOnStock(product.onStockLeft)]]">
                            <span class="market-product__box__bottom_available">
                                [[localize('SHOP_PRODUCT_STOCK_LEFT', 'onStockLeft', product.onStockLeft, 'onStock', product.onStock)]]
                            </span>
                        </template>

                        <template is="dom-if" if="[[!_isOnStock(product.onStockLeft)]]">
                            <div class="market-product__box__bottom__not-available">
                                <div>[[localize('SHOP_PRODUCT_SOLD_OUT')]]</div>
                                <template is="dom-if" if="[[product.availableDate]]">
                                    <span>[[localize('SHOP_PRODUCT_AVAILABLE_DATE')]] [[_availableDateFormat(product.availableDate)]]</span>
                                </template>
                            </div>
                        </template>
                        
                    </template>

                    
                    <template is="dom-if" if="[[product.owned]]">
                        <span class="market-product__box__bottom__owned">[[localize('SHOP_PRODUCT_OWNED')]]</span>
                    </template>
                    

                    <div class="market-product__box__bottom__button">
                        <span class="market-product__box__bottom__button__price">
                            [[product.price]]
                        </span>
                        <ag-icon icon="mg-game:money" 
                                 size="small" 
                                 class="market-product__box__bottom__button__icon">
                        </ag-icon>
                    </div>
                </div>
            </div>
        </ag-border-box>
    `
  }

  _isOnStock(onStockLeft) {
    return !!onStockLeft;
  }

  _availableDateFormat(date) {
    return availableDateFormat(date);
  }

  _onOpenModal() {
    store.dispatch(selectProductModal(this.product));
  }
}

customElements.define('market-product', MarketProduct);