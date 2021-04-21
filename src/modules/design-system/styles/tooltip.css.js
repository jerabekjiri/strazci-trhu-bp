import { css } from 'lit-element';
import { registerStyleModule } from '../../utils/registerStyleModule.fnc';

registerStyleModule('tooltip', css`
  :host {    
    --tooltip__text: {
      @apply --label;
      position: absolute;
      background-color: var(--main);
      color: #000000;
      text-align: center;
      padding: 8px;
      z-index: 1;
      width: 100px;
         
      font-size: 12px;
      line-height: 16px;
      
      transition-duration: 0.5s;
      transition-delay: 0.2s;
      
      visibility: hidden;
      opacity: 0;
    }
  }

  .tooltip {
    position: relative;
    display: inline-block;
  }
  
  .tooltip .tooltip__text {
    @apply --tooltip__text;
    left: 50%;
    bottom: calc(100% + 5px);
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
  }
  
  .tooltip .tooltip__text--bottom {
    @apply --tooltip__text;
    left: 50%;
    top: calc(100% + 5px);
    transform: translate(-50%);
    -webkit-transform: translate(-50%);
  }
  
  .tooltip .tooltip__text--right {
    @apply --tooltip__text;
    top: -4px;
    left: calc(100% + 5px);
  }
  
  .tooltip .tooltip__text--left {
    @apply --tooltip__text;
    top: -4px;
    right: calc(100% + 5px);
  }
  
  .tooltip:hover .tooltip__text,
  .tooltip:hover .tooltip__text--bottom, 
  .tooltip:hover .tooltip__text--right, 
  .tooltip:hover .tooltip__text--left {
     visibility: visible;
     opacity: 1;
        
     transition-duration: 0.5s;
     transition-delay: 0.8s;
     color: var(--my-soul);
  }
`);
