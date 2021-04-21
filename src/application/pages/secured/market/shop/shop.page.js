import { html } from '@polymer/polymer';
import { connect } from 'pwa-helpers/connect-mixin';
import { AbstractPage } from '../../../../../modules/shared/abstracts/abstract.page.js';
import { store } from '../../../../../modules/libraries/store/store';
import { NotificationProvider } from '../../../../../modules/shared/providers/notification.provider.js';
import { getProductsResource } from '../../../../../modules/resources/market/market-api.actions';
import { productsMarketResourceSelector, marketStateSelector} from '../../../../../modules/resources/market/selectors/market.selectors';
import { playerStateSelector } from '../../../../../modules/resources/game-status/selectors/game-status.selectors.js';

import '../../../../../modules/containers/core/market/top-filter';
import '../../../../../modules/containers/core/market/side-filter';
import '../../../../../modules/ui/market/market-product';

import './shop.page.css';

export class ShopPage extends connect(store)(AbstractPage) {
    constructor() {
        super();

        this.notificationProvider = new NotificationProvider();

        this.products = [];
        this.modal = null;
    }

    connectedCallback() {
        super.connectedCallback(); 
    }

    stateChanged(state) {
        this.playerState = playerStateSelector(state);
        this.isLoading = marketStateSelector(state).isLoading;
        this.products = [ ...productsMarketResourceSelector(state) ];
    }

    static get observers() {
        return [
            '$getProducts(playerState.idPlayer)'
        ]
    }

    $getProducts(idPlayer) {
        if(idPlayer) {
            store.dispatch(getProductsResource(idPlayer));
        }
    }

    static get template() {
        return html`
            <style include="shop-page-style"></style>

            <top-filter></top-filter>

            <div class="market-layout">
                <side-filter></side-filter>
                
                <template is="dom-if" if="[[isLoading]]">
                    <ag-loader></ag-loader>
                </template>
                
                <template is="dom-if" if="[[!isLoading]]">
                    <div class="market-layout__products">
                        <template is="dom-repeat" items="[[products]]" as="product" mutable-data> 
                            <market-product product="[[product]]"></market-product>
                        </template>
                    </div>
                </template>
            </div>
        `
    }
}

customElements.define('shop-page', ShopPage);