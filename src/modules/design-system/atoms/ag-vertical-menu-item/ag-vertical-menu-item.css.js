import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-vertical-menu-item', css`

  :host {  
    --vertical-menu-item: {
      height: 48px;
      width: 100%;
      box-sizing: border-box;
      line-height: 24px;
      font-size: 16px;
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: space-between;
    } 
  }
  
  .vertical-menu-item__label {
    margin-left: 16px;
    float: left;
  }
  
  .vertical-menu-item__info {
    display: flex;
    margin-right: 16px;
    float: right;
  }

  .vertical-menu-item--main--disabled {
    @apply --vertical-menu-item;
    color: var(--main-disabled);
    cursor: not-allowed;
  }
  
  .vertical-menu-item--main {
    @apply --vertical-menu-item;
  }

  .vertical-menu-item--main:hover { 
    @apply --vertical-menu-item;
    color: var(--main-light);
    background: var(--main-extra-low);
  }

  .vertical-menu-item--main:active {
    @apply --vertical-menu-item;
    color: var(--main-dark);
    background: var(--main-dark-extra-low);
  }

  .vertical-menu-item--main--selected {
    @apply --vertical-menu-item;
    @apply --main-glow;
    @apply --body1--plus;
    color: var(--my-soul);
  }

  .vertical-menu-item--main--selected:hover {
    @apply --vertical-menu-item;
    @apply --main-light-glow;
    color: var(--my-soul);
  }
  
  .vertical-menu-item--success {
    @apply --vertical-menu-item;
    color: var(--success);
  }

  .vertical-menu-item--success:hover { 
    @apply --vertical-menu-item;
    color: var(--success-light);
    background: var(--success-extra-low);
  }
  
  .vertical-menu-item--success:active {
    @apply --vertical-menu-item;
    color: var(--success-dark);
    background: var(--success-dark-extra-low);
  }
  
  .vertical-menu-item--success--selected {
    @apply --vertical-menu-item;
    @apply --success-glow;
    @apply --body1--plus;
    color: var(--my-soul);
  }
  
  .vertical-menu-item--success--selected:hover {
    @apply --vertical-menu-item;
    @apply --success-light-glow;
    color: var(--my-soul);
    font-weight: bold;
  }
`);
