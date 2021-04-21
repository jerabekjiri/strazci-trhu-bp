import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-main-menu-item', css`
  .main-menu-item {
    @apply --headline2--plus;
    padding: 0;
    outline: 0;
    border: none;
    background-color: transparent;
    width: 100%;
    display: flex;
    align-items: center;
    color: var(--main);
    text-transform: uppercase;
    cursor: pointer;
    text-align: left;
  }

  .main-menu-item::-moz-focus-inner {
    border: 0;
  }

  .main-menu-item__label {
    padding-left: 16px;
  }

  .main-menu-item:disabled {
    color: var(--main-disabled);
    cursor: not-allowed;
  }

  .main-menu-item[selected] {
    color: var(--main-extra-light);
    text-shadow: 0px 0px 20px #80EAFF;
  }

  .main-menu-item[selected]:focus,
  .main-menu-item[selected]:hover {
    @apply --edge-box-white;
  }

  .main-menu-item:not([selected]):not(:disabled):focus,
  .main-menu-item:not([selected]):not(:disabled):hover {
    @apply --edge-box-hover;
    color: var(--main-light);
  }

  .main-menu-item:not([selected]):not(:disabled):active {
    @apply --edge-box-pressed;
    color: var(--main-dark);
  }
`);
