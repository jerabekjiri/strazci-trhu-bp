import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-button', css`
  :host {
    --notchSize: 6px;
    
    --cropped: {
      clip-path: polygon(
      0% var(--notchSize), 
      var(--notchSize) 0%, 
      calc(100% - var(--notchSize)) 0%, 
      100% var(--notchSize), 
      100% calc(100% - var(--notchSize)), 
      calc(100% - var(--notchSize)) 100%, 
      var(--notchSize) 100%, 
      0% calc(100% - var(--notchSize))
    );
    -webkit-clip-path:
      polygon(
      0% var(--notchSize), 
      var(--notchSize) 0%, 
      calc(100% - var(--notchSize)) 0%, 
      100% var(--notchSize), 
      100% calc(100% - var(--notchSize)), 
      calc(100% - var(--notchSize)) 100%, 
      var(--notchSize) 100%, 
      0% calc(100% - var(--notchSize))
    );
    }
  }
  
  button {
    @apply --cropped;
    @apply --button;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    min-width: 96px;
    height: 32px;
    border: none;
    outline: none;
    box-sizing: border-box;
    cursor: pointer;
    position: relative;
    color: var(--my-soul);
    transition-duration: 0.15s;
  }
  
  .button__text {
    padding-left: 32px;
    padding-right: 32px;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    letter-spacing: 0.2px;
  }
  
  .corner { 
    position: absolute; 
  }
  
  .tl {
    border-left: 5px solid transparent;
    border-left: 5px solid var(--button-border-color);
    border-bottom: 5px solid transparent;
    left: 0px;
    top: 0px;
  }
  
  .tr {
    border-left: 5px solid transparent;
    border-right: 5px solid var(--button-border-color);
    border-bottom: 5px solid transparent;
    right: 0px;
    top: 0px;
  }
  
  .bl {
    border-left: 5px solid transparent;
    border-left: 5px solid var(--button-border-color);
    border-top: 5px solid transparent;
    left: 0px;
    bottom: 0px;
  }
  
  .br {
    border-left: 5px solid transparent;
    border-right: 5px solid var(--button-border-color);
    border-top: 5px solid transparent;
    right: 0px;
    bottom: 0px;
  }
    
  .button--primary {
    background: var(--main);
    color: var(--my-soul);
  }
  .button--primary:hover{
    background: var(--main-light);
  }
  .button--primary:active {
    background: var(--main-dark);
  }
  .button--primary:disabled {
    background: var(--main-disabled);
    cursor: not-allowed;
  }
  
  .button--secondary {
    color: var(--main);
    border: 2px solid var(--main);
    background: transparent;
    --button-border-color: var(--main);
  }
  .button--secondary:hover {
    background: var(--main-light);   
    border: 2px solid var(--main-light);  
    color: var(--my-soul);
    --button-border-color: var(--main-light);
  }
  .button--secondary:active {
    background: var(--main-dark);
    border: 2px solid var(--main-dark);
    color: var(--my-soul);
    --button-border-color: var(--main-dark);
  }
  .button--secondary:disabled {
    color: var(--main-disabled);
    border: 2px solid var(--main-disabled);
    background: transparent;
    cursor: not-allowed;
    --button-border-color: var(--main-disabled);
  }
  
  .button--tertiary {
    color: var(--main);
    background: transparent;
  }
  .button--tertiary:hover {
    color: var(--main-light);
    background: transparent;
  }
  .button--tertiary:active {
    color: var(--main-dark);
    background: transparent;
  }
  .button--tertiary:disabled {
    color: var(--main-disabled);
    background: transparent;
    cursor: not-allowed;
  }
  
  .button--destruct {
    background: var(--error);
    color: var(--my-soul);
  }
  .button--destruct:hover {
    background: var(--error-light);
  }
  .button--destruct:active {
    background: var(--error-dark);
  }
  
  .button--confirm {
    background: var(--success);
    color: var(--my-soul);
  }
  .button--confirm:hover {
    background: var(--success-light);
  }
  .button--confirm:active {
    background: var(--success-dark);
  }
`);
