import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

import { edgeBorder } from '../../mixins/edge-border.css';

registerStyleModule('ag-atomic-tile', css`
${edgeBorder}
  
  :host {
    --atomic-tile-block: {
      position: relative;
      width: 100%;
      min-height: 16px;
      background: transparent;
    }
    
    --atomic-tile-content: {
      position: relative;
      padding: 16px;
      margin: -1px;
      box-sizing: border-box;

    }
    
    --atomic-tile-label: {
      @apply --label;
      position: absolute;
      top: -8px;
      right: 32px;
      padding: 0 8px;
      background: transparent;
      text-align: right;
      height: 16px;
      background: #060a12;
    }
  }
  
  .atomic-tile--main,
  .atomic-tile--main--readonly {
    @apply --atomic-tile-block;
    border: 1px solid var(--main-low);
  }

  .atomic-tile--main .atomic-tile__content,
  .atomic-tile--main--readonly .atomic-tile__content {
    @apply --atomic-tile-content;
    @apply --edge-box;
  }
  
  .atomic-tile--main:hover {
    background: var(--main-extra-low);
  }
  
  .atomic-tile--main:active {
    background: var(--main-dark-extra-low);
  }
  
  .atomic-tile--warning,
  .atomic-tile--warning--readonly {
    @apply --atomic-tile-block;
    border: 1px solid var(--warning-low);
  }

  .atomic-tile--warning .atomic-tile__content,
  .atomic-tile--warning--readonly .atomic-tile__content {
    @apply --atomic-tile-content;
    @apply --edge-box-notification;
  }
  
  .atomic-tile--warning:hover {
    background: var(--warning-extra-low);
  }
  
  .atomic-tile--warning:active {
    background: var(--warning-dark-extra-low);
  }
  
  .atomic-tile--main .atomic-tile__label {
    @apply --atomic-tile-label;
    color: var(--main);
  }
  
  .atomic-tile--warning .atomic-tile__label {
    @apply --atomic-tile-label;
    color: var(--warning);
  }

`);
