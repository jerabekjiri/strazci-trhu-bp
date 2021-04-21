import { css } from 'lit-element';
import { registerStyleModule } from '../../../modules/utils/registerStyleModule.fnc';

registerStyleModule('market-product', css`
    :host {
        margin-bottom: 35px;
        margin-left: 15px;
        cursor: pointer;
    }

    .market-product__box {
        color: var(--main-light);
        width: 250px;
        height: 500px;
        padding: 24px;
        display: flex;
        flex-direction: column;
    }

    .market-product__box__img {
        overflow: hidden;
        width: 100%;
    }

    .market-product__box__content {
        flex-grow: 1;
        padding-top: 10px;
    }

    .market-product__box__bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .market-product__box__bottom_available {
        color: white;
        font-size: 18px;
    }

    .market-product__box__bottom__button .market-product__box__bottom__button__price,
    .market-product__box__bottom__button .market-product__box__bottom__button__icon {
        display: inline-block;
    }

    .market-product__box__bottom__button__icon {
        position: relative;
        top: -3px;
    }

    .market-product__box__bottom__not-available {
        font-size: 14px;
    }

    .market-product__box__bottom__not-available div,
    .market-product__box__bottom__owned {
        text-transform: uppercase;
        font-size: 18px;
    }
`);
