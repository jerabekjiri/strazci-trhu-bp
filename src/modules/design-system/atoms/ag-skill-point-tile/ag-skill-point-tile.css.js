import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-skill-point-tile', css`
  
  .skill-point-tile {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    font-weight: bold;
    justify-content: center;
    height: 24px;
    width: 96px;
  }
  
  ::slotted(*) {
    padding-left: 5px;
    color: var(--warning);
  }
  
  .skill-point-tile__icon {
    margin-left: -4px;
  }
  
  .skill-point-tile--main .skill-point-tile__icon {
    margin-left: -6px;
  }
  
  .skill-point-tile--main {
    @apply --body1--plus;
    color: var(--main);
    background: var(--main-low); 
    height: 32px !important;
    width: 120px !important;
  }
  
  .skill-point-tile--product {
    @apply --body3--plus;
    color: var(--product);
    background: var(--product-low);
  }
  
  .skill-point-tile--communication {
    @apply --body3--plus;
    color: var(--communication);
    background: var(--communication-low);
  }
  
  .skill-point-tile--organising {
    @apply --body3--plus;
    color: var(--organising);
    background: var(--organising-low);
  }
  
  .skill-point-tile--prospecting {
    @apply --body3--plus;
    color: var(--prospecting);
    background: var(--prospecting-low);
  }
  
  .skill-point-tile--business {
    @apply --body3--plus;
    color: var(--business);
    background: var(--business-low);
  }
  
  .skill-point-tile--networking {
    @apply --body3--plus;
    color: var(--networking);
    background: var(--networking-low);
  }
`);
