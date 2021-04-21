import { css } from 'lit-element';
import { registerStyleModule } from '../../../modules/utils/registerStyleModule.fnc';

registerStyleModule('inventory-product', css`
    :host {
        margin: 0px 0px 24px;
    }

    .inventory-product__box {
        color: var(--main-light);
        padding: 24px;
        width: 870px;
    }

    .inventory-product__box__content {
        display: flex;
    }

    .inventory-product__box__content__left {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
    }

    .inventory-product__box__content__left__img {
        margin: auto;
    }

    .inventory-product__box__content__left__group-type {
        text-align: center;
    }

    .inventory-product__box__content__left__img {
        overflow: hidden;
        width: 300px;
    }

    .inventory-product__box__content__left__group-type {
        text-align: center;
        margin-top: 15px;
    }

    .inventory-product__box__content__right {
        width: 100%;
        margin: 0px 0px 0px 24px;
    }

    .inventory-product__box__content__right h2 {
        margin: 0;
    }

    .inventory-product__box__bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 40px;
    }

    .inventory-product__box__bottom__button__price,
    .inventory-product__box__bottom__button__icon {
    display: inline-block;
    }

    .inventory-product__box__bottom__button__icon {
        position: relative;
        top: -3px;
    }

    .inventory-product__box__bottom__activated {
        text-align: right;
        flex-grow: 1;
    }
`);
