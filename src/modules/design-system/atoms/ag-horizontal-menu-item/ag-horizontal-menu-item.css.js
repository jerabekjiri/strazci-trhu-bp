import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-horizontal-menu-item', css`

  :host {
    display: block;
  }

  .horizontal-menu-item {
    height: 100%;
    min-width: 200px;
    padding: 0 16px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: var(--main);
    font-weight: 400;
    text-transform: uppercase;
    outline: none;
    background-color: transparent;
    border: none;
    font-family: 'Chakra Petch', sans-serif;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.2px;
  }

  .horizontal-menu-item::-moz-focus-inner {
    border: 0;
  }

  .horizontal-menu-item[selected]:not(:disabled) {
    @apply --main-glow;
  }
  
  .horizontal-menu-item[selected]:not(:disabled):focus,
  .horizontal-menu-item[selected]:not(:disabled):hover {
    @apply --main-light-glow; 
  }

  .horizontal-menu-item[selected]:not(:disabled),
  .horizontal-menu-item[selected]:not(:disabled):focus,
  .horizontal-menu-item[selected]:not(:disabled):hover {
    font-weight: 700;
    color: var(--my-soul);
  }

  .horizontal-menu-item:not(:disabled):focus,
  .horizontal-menu-item:not(:disabled):hover {
    color: var(--main-light);
    background: var(--main-extra-low);
  }

  .horizontal-menu-item:not(:disabled):active {
    color: var(--main-dark);
    background: var(--main-dark-extra-low);
  }

  .horizontal-menu-item:disabled {
    color: var(--main-disabled);
    cursor: not-allowed;
  }

  @media only screen and (max-width: 575px) {
    .horizontal-menu-item {
      width: 100%;
      font-size: 14px;
      line-height: 16px;
    }
  }

`);
