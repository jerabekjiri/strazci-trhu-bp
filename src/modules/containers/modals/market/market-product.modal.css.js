import { css } from 'lit-element'

import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('market-product-modal', css`
  .market-product-modal {
    display: flex;
    justify-content: space-evenly;
  }

  .market-product-modal__left {
    width: 250px;
    overflow:hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .market-product-modal__left__group-type {
    text-align: center;
    margin: 10px 0px 0px;
    font-size: 12px;
  }
  
  .market-product-modal__left__img {
    display:block;
    width: 200px;
  }

  .market-product-modal__right {
    width: 320px;
  }

  .market-product-modal__right h2 {
    margin: 0;
    color: var(--main);
  }

  .market-product-modal__actions {
    display: flex;
    justify-content: space-between;
  }

  .market-product-modal__actions__button__price,
  .market-product-modal__actions__button__icon {
    display: inline-block;
  }

  .market-product-modal__actions__button__icon {
    position: relative;
    top: -3px;
  }

  .market-product__box__bottom__available div,
  .market-product__box__bottom__not-available div {
    color: var(--main);
  }

  .market-product__box__bottom__available {
    color: white;
    font-size: 18px;
  }

  .market-product__box__bottom__not-available div,
  .market-product__box__bottom__owned {
    text-transform: uppercase;
    font-size: 18px;
    color: var(--main);
  }


`);
