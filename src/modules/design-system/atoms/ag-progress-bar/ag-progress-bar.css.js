import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-progress-bar', css`
  :host {
    width: 100%;
    display: flex;
  }
  
  /* Tiny progress bar style */
  
  .progress-bar--tiny {
    width: 100%;
    height: 6px;
    margin: 1px 4px 0 4px;
  }

  .progress-bar__pipe--tiny {
    height: 6px;
    border-radius: 0px 3px 3px 0px;
    width: 0%;
    -webkit-transition: width 1s;
    transition: width 1s;
  }

  .side-block--tiny {
    width: 8px;
    height: 8px;
  }
  
  /* Small progress bar style */
  
  .progress-bar--small {
    width: 100%;
    height: 12px;
    margin: 2px 4px 0 4px;
  }

  .progress-bar__pipe--small {
    height: 12px;
    border-radius: 0px 3px 3px 0px;
    width: 0%;
    -webkit-transition: width 1s;
    transition: width 1s;
  }

  .side-block--small {
    width: 8px;
    height: 16px;
  }
  
  /* Normal progress bar style */
  
  .progress-bar--normal {
    align-items: center;
    width: 100%;
    height: 18px;
    display: flex;
    margin-top: 2px;
    padding: 0 2px 0 2px;
   }
  
  .block--filled--normal {
    width: calc(100% / 10);
    height: 12px;
    margin: 0 2px 0 2px;
   }
                
  .block--normal {
    width: calc(100% / 10);
    height: 12px;
    margin: 0 2px 0 2px;
  }
  
  .side-block--normal {
    width: 8px;
    height: 24px;
  }
  
  /* Big progress bar style */
  
  .progress-bar--big {
    align-items: center;
    width: 100%;
    height: 26px;
    display: flex;
    margin-top: 2px;
    padding: 0 2px 0 2px;
   }
  
  .block--filled--big {
    width: calc(100% / 10);
    height: 20px;
    margin: 0 2px 0 2px;
   }
                
  .block--big {
    width: calc(100% / 10);
    height: 20px;
    margin: 0 2px 0 2px;
  }
  
  .side-block--big {
    width: 8px;
    height: 32px;
  }
  
  /* Progress bar colors */
  
  .side-block--disabled{
    background: var(--main-disabled);
  }
  
  .progress-bar--tiny--disabled,
  .progress-bar--small--disabled {
    background: var(--main-low-disabled);
  }
  
  .progress-bar--normal--disabled,
  .progress-bar--big--disabled {
    border-top: 1px solid var(--main-low-disabled);
    border-bottom: 1px solid var(--main-low-disabled);
  }
  
  .block--disabled,
  .block--filled--disabled{
    background: var(--main-low-disabled);
  }
  
  .progress-bar--normal--main,
  .progress-bar--big--main{
    border-top: 1px solid var(--main-low);
    border-bottom: 1px solid var(--main-low);
  }
  
  .progress-bar--normal--main-light,
  .progress-bar--big--main-light {
    border-top: 1px solid var(--main-light-low);
    border-bottom: 1px solid var(--main-light-low);
  }
  
  .progress-bar--normal--product,
  .progress-bar--big--product {
    border-top: 1px solid var(--product-low);
    border-bottom: 1px solid var(--product-low);
  }
  
  .progress-bar--normal--communication,
  .progress-bar--big--communication {
    border-top: 1px solid var(--communication-low);
    border-bottom: 1px solid var(--communication-low);
  }
  
  .progress-bar--normal--organising,
  .progress-bar--big--organising {
    border-top: 1px solid var(--organising-low);
    border-bottom: 1px solid var(--organising-low);
  }
  
  .progress-bar--normal--prospecting,
  .progress-bar--big--prospecting {
    border-top: 1px solid var(--prospecting-low);
    border-bottom: 1px solid var(--prospecting-low);
  }
  
  .progress-bar--normal--business,
  .progress-bar--big--business {
    border-top: 1px solid var(--business-low);
    border-bottom: 1px solid var(--business-low);
  }
  
  .progress-bar--normal--networking,
  .progress-bar--big--networking {
    border-top: 1px solid var(--networking-low);
    border-bottom: 1px solid var(--networking-low);
  }
  
  .progress-bar__pipe--main,
  .block--filled--main {
    @apply --main-glow;
  }
  
  .progress-bar__pipe--main-light,
  .block--filled--main-light {
    @apply --main-light-glow;
  }
  
  .progress-bar__pipe--product,
  .block--filled--product {
    @apply --product-glow;
  }
  
  .progress-bar__pipe--communication,
  .block--filled--communication {
    @apply --communication-glow;
  }
  
  .progress-bar__pipe--organising,
  .block--filled--organising {
    @apply --organising-glow;
  }
  
  .progress-bar__pipe--prospecting,
  .block--filled--prospecting {
    @apply --prospecting-glow;
  }
  
  .progress-bar__pipe--business,
  .block--filled--business {
    @apply --business-glow;
  }
  
  .progress-bar__pipe--networking,
  .block--filled--networking {
    @apply --networking-glow;
  }
  
  .progress-bar--tiny--main,
  .progress-bar--small--main,
  .block--main {
    background: var(--main-low);
  }
  
  .progress-bar--tiny--main-light,
  .progress-bar--small--main-light,
  .block--main-light {
    background: var(--main-light-low);
  }
  
  .progress-bar--tiny--product,
  .progress-bar--small--product,
  .block--product {
    background: var(--product-low);
  }
  
  .progress-bar--tiny--communication,
  .progress-bar--small--communication,
  .block--communication {
    background: var(--communication-low);
  }
  
  .progress-bar--tiny--organising,
  .progress-bar--small--organising,
  .block--organising {
    background: var(--organising-low);
  }
  
  .progress-bar--tiny--prospecting,
  .progress-bar--small--prospecting,
  .block--prospecting {
    background: var(--prospecting-low);
  }
  
  .progress-bar--tiny--business,
  .progress-bar--small--business,
  .block--business {
    background: var(--business-low);
  }
  
  .progress-bar--tiny--networking,
  .progress-bar--small--networking,
  .block--networking {
    background: var(--networking-low);
  }

  .side-block--main {
    background: var(--main);
  }
  
  .side-block--main-light {
    background: var(--main-light);
  }
  
  .side-block--product {
    background: var(--product);
  }
  
  .side-block--communication {
    background: var(--communication);
  }
  
  .side-block--organising {
    background: var(--organising);
  }
  
  .side-block--prospecting {
    background: var(--prospecting);
  }
  
  .side-block--business {
    background: var(--business);
  }
  
  .side-block--networking {
    background: var(--networking);
  }
`);
