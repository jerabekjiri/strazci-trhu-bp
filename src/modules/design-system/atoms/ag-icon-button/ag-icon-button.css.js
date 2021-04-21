import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-icon-button', css`
  .icon-button {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    cursor: pointer;
    padding: 0;
  }

  .icon-button::-moz-focus-inner {
    border: 0;
  }

  .icon-button--tiny {
    height: 24px;
    width: 24px;
  }
  
  .icon-button--small {
    height: 32px;
    width: 32px;
  }

  .icon-button--normal {
    height: 48px;
    width: 48px;
  }

  .icon-button--large {
    height: 96px;
    width: 96px;
  }

  .icon-button--white {
    color: var(--white);
  }
  .icon-button--main {
    color: var(--main);
  }
  .icon-button--product {
    color: var(--product);
  }
  .icon-button--communication {
    color: var(--communication);
  }
  .icon-button--organising {
    color: var(--organising);
  }
  .icon-button--prospecting {
    color: var(--prospecting);
  }
  .icon-button--business {
    color: var(--business);
  }
  .icon-button--networking {
    color: var(--networking);
  }
  .icon-button--success {
    color: var(--success);
  }
  .icon-button--warning {
    color: var(--warning);
  }
  .icon-button--error {
    color: var(--error);
  }

  .icon-button--white:active {
    color: var(--white);
  }
  .icon-button--main:active {
    color: var(--main-dark);
  }
  .icon-button--product:active {
    color: var(--product-dark);
  }
  .icon-button--communication:active {
    color: var(--communication-dark);
  }
  .icon-button--organising:active {
    color: var(--organising-dark);
  }
  .icon-button--prospecting:active {
    color: var(--prospecting-dark);
  }
  .icon-button--business:active {
    color: var(--business-dark);
  }
  .icon-button--networking:active {
    color: var(--networking-dark);
  }
  .icon-button--success:active {
    color: var(--success-dark);
  }
  .icon-button--warning:active {
    color: var(--warning-dark);
  }
  .icon-button--error:active {
    color: var(--error-dark);
  }

  .icon-button:disabled {
    cursor: not-allowed;
    color: var(--main-disabled);
  }

`);
