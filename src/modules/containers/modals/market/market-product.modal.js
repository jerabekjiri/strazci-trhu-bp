import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';

import { store } from '../../../libraries/store/store';
import { AbstractContainer } from '../../../shared/abstracts/abstract.container';
import { selectedProductModalSelector } from '../../../resources/market/selectors/market.selectors';
import { NotificationProvider } from '../../../shared/providers/notification.provider';
import { modalInit }  from '../../../../modules/resources/market/actions/modal.actions';
import { buyProductResource } from '../../../resources/market/market-api.actions';
import { marketStateSelector } from '../../../resources/market/selectors/market.selectors';
import { availableDateFormat } from '../../../../modules/utils/market.fnc';   

import '../../../design-system/atoms/ag-modal/ag-modal';
import '../../../design-system/atoms/ag-button/ag-button';
import '../../../design-system/atoms/ag-loader/ag-loader';

import './market-product.modal.css';

export class MarketProductModal extends connect(store)(AbstractContainer) {

  constructor() {
    super();
    this.notificationProvider = new NotificationProvider();

    window.addEventListener('keydown', this._onKeyDown);
   
  }
  
  connectedCallback() {
    super.connectedCallback();
  }

  stateChanged(state) {
    this.marketState = marketStateSelector(state);
    this.product = selectedProductModalSelector(state);
    if(!this.product) {
        this._onCloseModal();
      }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    store.dispatch(modalInit());
    window.removeEventListener('keydown', this._onKeyDown);
  }

  static get observers() {
    return [
      '$buyProductSuccess(marketState.buyProductSuccess)',
      '$buyProductFailed(marketState.error)'
    ]
  }

  $buyProductSuccess(success) {
    if(!!success) {
      this.notificationProvider.showSuccessMessage(
        this.localize('MARKET_BUY_PRODUCT_MODAL_SUCCESS_MESSAGE')
      );
      this.dispatchEvent(new CustomEvent('close-modal')); 
    }    
  }

  $buyProductFailed(error) {
    if(!!error) {
      this.notificationProvider.showErrorMessage(
        this.localize('MARKET_BUY_PRODUCT_MODAL_ERROR_MESSAGE')
      );
      this.dispatchEvent(new CustomEvent('close-modal'));
    }
  }

  static get template() {
    return html `   
      <style include="market-product-modal-style"></style>
      <ag-modal on-close-modal="_onCloseModal">
        <span slot="title"></span>
        <span slot="content">
          <div class="market-product-modal">
            <div class="market-product-modal__left">
              <img src="[[product.img]]" class="market-product-modal__left__img" />
              <span class="market-product-modal__left__group-type">[[localize('MARKET_MODAL_GROUP_NAME', 'groupName', product.group.name)]]</span>
            </div>
            <div class="market-product-modal__right">
              <h2>[[product.title]]</h2>
              <span>[[product.category.name]]</span>
              <p>[[product.description]]</p>
            </div>
          </div>
        </span>
        <span slot="actions">
          <div class="market-product-modal__actions">
            <template is="dom-if" if="[[!product.owned]]">

              <template is="dom-if" if="[[_isOnStock(product.onStockLeft)]]">
                <div class="market-product__box__bottom__available">
                  <div>[[localize('SHOP_PRODUCT_STOCK_LEFT', 'onStockLeft', product.onStockLeft, 'onStock', product.onStock)]]</div>
                  <span>[[localize('MARKET_MODAL_PRODUCT_TIME_USABILITY', 'daysUsability', product.daysUsability)]]</span>
                </div>
              </template>

              <template is="dom-if" if="[[!_isOnStock(product.onStockLeft)]]">
                <div class="market-product__box__bottom__not-available">
                  <div>[[localize('SHOP_PRODUCT_SOLD_OUT')]]</div>
                  <template is="dom-if" if="[[product.availableDate]]">
                    <span>
                      [[localize('SHOP_PRODUCT_AVAILABLE_DATE')]] [[_availableDateFormat(product.availableDate)]]
                    </span>
                  </template>
                </div>
              </template>

            </template>

            <template is="dom-if" if="[[product.owned]]">
              <span class="market-product__box__bottom__owned">
                [[localize('SHOP_PRODUCT_OWNED')]]
              </span>
            </template>

            <ag-button type="secondary" 
                        disabled="[[_isDisabled(product.onStockLeft, product.owned)]]"
                        on-action="_buyProduct" 
                        class="market-product-modal__actions__button">
                
                <span class="market-product-modal__actions__button__price">
                  [[localize('MARKET_MODAL_PRICE', 'price', product.price)]]
                </span>
                <ag-icon icon="mg-game:money" 
                          size="small" 
                          class="market-product-modal__actions__button__icon">
                </ag-icon>
            </ag-button>
          </div>
        </span>
      </ag-modal>
    `;
  }

  _buyProduct() {
    store.dispatch(buyProductResource(this.product));
  }
  
  _onCloseModal() {
    this.dispatchEvent(new CustomEvent('close-modal'));
  }

  _availableDateFormat(date) {
    return availableDateFormat(date);
  }

  _isOnStock(onStockLeft) {
    return !!onStockLeft;
  }

  _isDisabled(onStockLeft, owned) {
    return !onStockLeft || owned;
  }

  _onKeyDown(e) {
    if (e.code == 'Escape') 
      store.dispatch(modalInit());
  }
}

customElements.define('market-product-modal', MarketProductModal);
