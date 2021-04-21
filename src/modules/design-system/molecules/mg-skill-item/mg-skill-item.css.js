import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('mg-skill-item', css`
  
  .skill-item {
    width: 100%;
    cursor: pointer;
  }
  
  .skill-item:focus,
  .skill-item[disabled]:focus {
    outline: none;
  }

  .skill-item--primary.skill-item:hover .skill-item__block,
  .skill-item--primary.skill-item[selected] .skill-item__block,
  .skill-item--primary.skill-item:focus .skill-item__block {
    padding-left: 12px;
  }
  
  .skill-item--primary .skill-item__block:active {
    background: none !important;
  }
  
  .skill-item__block {
    padding: 8px 16px;
  }
  
  .skill-item__info__row {
    display: flex;
    flex-direction: row;
    padding-bottom: 8px;
  }
  
  .skill-item[disabled] {
    cursor: not-allowed;
  }
  
  .skill-item[disabled]:hover .skill-item__block,
  .skill-item[disabled]:focus .skill-item__block {
    padding: 8px 16px !important;
  }
  
  .skill-item__info__text {
    display: flex;
    flex-direction: column;
    padding-left: 16px;
  }
  
  .skill-item__info__text[disabled],
  .skill-item__info__text[disabled] .skill-item__info__text__subtitle__level,
  .skill-item__info__text[disabled] .skill-item__info__text__subtitle__experiences {
    color: var(--main-disabled);
  }
  
  .skill-item__info__row__icon[disabled] {
    @apply --edge-box-disabled;
    color: var(--main-disabled);
  }
  
  .skill-item__info__row__icon[disabled] .skill-item__info__row__icon__tile {
    background: var(--main-extra-low-disabled);
  }
  
  .skill-item__info__text__title {
    @apply --headline2;
  }
  
  .skill-item__info__text__title[selected] {
    font-weight: bold;
  }
  
  .skill-item__info__text__subtitle {
    width: 106px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .skill-item__info__text__subtitle__level {
    @apply --body3--plus;
  }
  
  .skill-item__info__text__subtitle__experiences {
    @apply --body3;
  }
  
  .skill-item__progress-bar {
    padding-bottom: 4px;
  }
  
  /* COLOR TYPES */
  
  /* PRODUCT */
   
  .skill-item__info__row__icon--product {
    @apply --edge-box-product;
    color: var(--product);
  }
  
  .skill-item__info__row__icon--product .skill-item__info__row__icon__tile {
    background: var(--product-extra-low);
  }
  
  .skill-item__info__text--product:not([disabled]) .skill-item__info__text__subtitle,
  .skill-item__info__text--product:not([disabled]) .skill-item__info__text__subtitle__level,
  .skill-item__info__text--product:not([disabled]) .skill-item__info__text__subtitle__experiences {
    color: var(--product-light);
  }

  .skill-item--primary:not([disabled]).skill-item--product:hover .skill-item__block,
  .skill-item--primary:not([disabled]).skill-item--product:focus .skill-item__block { 
    background: linear-gradient(90deg, var(--product-dark-extra-low) 0%, transparent 100%);
    border-left: 4px solid var(--product-dark);
  }
  
  .skill-item--primary:not([disabled]).skill-item--product.skill-item[selected] .skill-item__block {
    border-left: 4px solid var(--product-dark);
    background: var(--product-dark-extra-low) !important;
  }

  .skill-item--secondary:not([disabled]).skill-item--product:hover,
  .skill-item--secondary:not([disabled]).skill-item--product:active,
  .skill-item--secondary:not([disabled]).skill-item--product:focus,
  .skill-item--secondary:not([disabled]).skill-item--product.skill-item[selected] {
    background: var(--product-dark-extra-low);
  }
  
  .skill-item--primary.skill-item--product.skill-item[selected]:hover .skill-item__block,
  .skill-item--primary.skill-item--product.skill-item[selected]:focus .skill-item__block,
  .skill-item--secondary.skill-item--product.skill-item[selected]:hover,
  .skill-item--secondary.skill-item--product.skill-item[selected]:focus {
    background: var(--product-dark-low) !important;
  }
  
  /* COMMUNICATION */

  .skill-item__info__row__icon--communication {
    @apply --edge-box-communication;
    color: var(--communication);
  }
  
  .skill-item__info__row__icon--communication .skill-item__info__row__icon__tile {
    background: var(--communication-extra-low);
  }
  
  .skill-item__info__text--communication:not([disabled]) .skill-item__info__text__subtitle,
  .skill-item__info__text--communication:not([disabled]) .skill-item__info__text__subtitle__level,
  .skill-item__info__text--communication:not([disabled]) .skill-item__info__text__subtitle__experiences {
    color: var(--communication-light);
  }

  .skill-item--primary.skill-item--communication .skill-item__block:hover,
  .skill-item--primary.skill-item--communication:focus .skill-item__block { 
    background: linear-gradient(90deg, var(--communication-dark-extra-low) 0%, transparent 100%);
    border-left: 4px solid var(--communication-dark);
  }
  
  .skill-item--primary.skill-item--communication.skill-item[selected] .skill-item__block {
    border-left: 4px solid var(--communication-dark);
    background: var(--communication-dark-extra-low) !important;
  }

  .skill-item--secondary.skill-item--communication:hover,
  .skill-item--secondary.skill-item--communication:active,
  .skill-item--secondary.skill-item--communication:focus,
  .skill-item--secondary.skill-item--communication.skill-item[selected] {
    background: var(--communication-dark-extra-low);
  }
  
  .skill-item--primary.skill-item--communication.skill-item[selected]:hover .skill-item__block,
  .skill-item--primary.skill-item--communication.skill-item[selected]:focus .skill-item__block,
  .skill-item--secondary.skill-item--communication.skill-item[selected]:hover,
  .skill-item--secondary.skill-item--communication.skill-item[selected]:focus {
    background: var(--communication-dark-low) !important;
  }

  /* ORGANISING */

  .skill-item__info__row__icon--organising {
    @apply --edge-box-organising;
    color: var(--organising);
  }
  
  .skill-item__info__row__icon--organising .skill-item__info__row__icon__tile {
    background: var(--organising-extra-low);
  }
  
  .skill-item__info__text--organising:not([disabled]) .skill-item__info__text__subtitle,
  .skill-item__info__text--organising:not([disabled]) .skill-item__info__text__subtitle__level,
  .skill-item__info__text--organising:not([disabled]) .skill-item__info__text__subtitle__experiences {
    color: var(--organising-light);
  }

  .skill-item--primary.skill-item--organising .skill-item__block:hover,
  .skill-item--primary.skill-item--organising:focus .skill-item__block { 
    background: linear-gradient(90deg, var(--organising-dark-extra-low) 0%, transparent 100%);
    border-left: 4px solid var(--organising-dark);
  }
  
  .skill-item--primary.skill-item--organising.skill-item[selected] .skill-item__block {
    border-left: 4px solid var(--organising-dark);
    background: var(--organising-dark-extra-low) !important;
  }

  .skill-item--secondary.skill-item--organising:hover,
  .skill-item--secondary.skill-item--organising:active,
  .skill-item--secondary.skill-item--organising:focus,
  .skill-item--secondary.skill-item--organising.skill-item[selected] {
    background: var(--organising-dark-extra-low);
  }
  
  .skill-item--primary.skill-item--organising.skill-item[selected]:hover .skill-item__block,
  .skill-item--primary.skill-item--organising.skill-item[selected]:focus .skill-item__block,
  .skill-item--secondary.skill-item--organising.skill-item[selected]:hover,
  .skill-item--secondary.skill-item--organising.skill-item[selected]:focus {
    background: var(--organising-dark-low) !important;
  }
  
  /* PROSPECTING */

  .skill-item__info__row__icon--prospecting {
    @apply --edge-box-prospecting;
    color: var(--prospecting);
  }
  
  .skill-item__info__row__icon--prospecting .skill-item__info__row__icon__tile {
    background: var(--prospecting-extra-low);
  }
  
  .skill-item__info__text--prospecting:not([disabled]) .skill-item__info__text__subtitle,
  .skill-item__info__text--prospecting:not([disabled]) .skill-item__info__text__subtitle__level,
  .skill-item__info__text--prospecting:not([disabled]) .skill-item__info__text__subtitle__experiences {
    color: var(--prospecting-light);
  }

  .skill-item--primary.skill-item--prospecting .skill-item__block:hover,
  .skill-item--primary.skill-item--prospecting:focus .skill-item__block { 
    background: linear-gradient(90deg, var(--prospecting-dark-extra-low) 0%, transparent 100%);
    border-left: 4px solid var(--prospecting-dark);
  }
  
  .skill-item--primary.skill-item--prospecting.skill-item[selected] .skill-item__block {
    border-left: 4px solid var(--prospecting-dark);
    background: var(--prospecting-dark-extra-low) !important;
  }

  .skill-item--secondary.skill-item--prospecting:hover,
  .skill-item--secondary.skill-item--prospecting:active,
  .skill-item--secondary.skill-item--prospecting:focus,
  .skill-item--secondary.skill-item--prospecting.skill-item[selected] {
    background: var(--prospecting-dark-extra-low);
  }
  
  .skill-item--primary.skill-item--prospecting.skill-item[selected]:hover .skill-item__block,
  .skill-item--primary.skill-item--prospecting.skill-item[selected]:focus .skill-item__block,
  .skill-item--secondary.skill-item--prospecting.skill-item[selected]:hover,
  .skill-item--secondary.skill-item--prospecting.skill-item[selected]:focus {
    background: var(--prospecting-dark-low) !important;
  }

  /* BUSINESS */

  .skill-item__info__row__icon--business {
    @apply --edge-box-business;
    color: var(--business);
  }
  
  .skill-item__info__row__icon--business .skill-item__info__row__icon__tile {
    background: var(--business-extra-low);
  }
  
  .skill-item__info__text--business:not([disabled]) .skill-item__info__text__subtitle,
  .skill-item__info__text--business:not([disabled]) .skill-item__info__text__subtitle__level,
  .skill-item__info__text--business:not([disabled]) .skill-item__info__text__subtitle__experiences {
    color: var(--business-light);
  }

  .skill-item--primary.skill-item--business .skill-item__block:hover,
  .skill-item--primary.skill-item--business:focus .skill-item__block { 
    background: linear-gradient(90deg, var(--business-dark-extra-low) 0%, transparent 100%);
    border-left: 4px solid var(--business-dark);
  }
  
  .skill-item--primary.skill-item--business.skill-item[selected] .skill-item__block {
    border-left: 4px solid var(--business-dark);
    background: var(--business-dark-extra-low) !important;
  }

  .skill-item--secondary.skill-item--business:hover,
  .skill-item--secondary.skill-item--business:active,
  .skill-item--secondary.skill-item--business:focus,
  .skill-item--secondary.skill-item--business.skill-item[selected] {
    background: var(--business-dark-extra-low);
  }
  
  .skill-item--primary.skill-item--business.skill-item[selected]:hover .skill-item__block,
  .skill-item--primary.skill-item--business.skill-item[selected]:focus .skill-item__block,
  .skill-item--secondary.skill-item--business.skill-item[selected]:hover,
  .skill-item--secondary.skill-item--business.skill-item[selected]:focus {
    background: var(--business-dark-low) !important;
  }
  
  /* NETWORKING */

  .skill-item__info__row__icon--networking {
    @apply --edge-box-networking;
    color: var(--networking);
  }
  
  .skill-item__info__row__icon--networking .skill-item__info__row__icon__tile {
    background: var(--networking-extra-low);
  }
  
  .skill-item__info__text--networking:not([disabled]) .skill-item__info__text__subtitle,
  .skill-item__info__text--networking:not([disabled]) .skill-item__info__text__subtitle__level,
  .skill-item__info__text--networking:not([disabled]) .skill-item__info__text__subtitle__experiences {
    color: var(--networking-light);
  }

  .skill-item--primary.skill-item--networking .skill-item__block:hover,
  .skill-item--primary.skill-item--networking:focus .skill-item__block { 
    background: linear-gradient(90deg, var(--networking-dark-extra-low) 0%, transparent 100%);
    border-left: 4px solid var(--networking-dark);
  }
  
  .skill-item--primary.skill-item--networking.skill-item[selected] .skill-item__block {
    border-left: 4px solid var(--networking-dark);
    background: var(--networking-dark-extra-low) !important;
  }

  .skill-item--secondary.skill-item--networking:hover,
  .skill-item--secondary.skill-item--networking:active,
  .skill-item--secondary.skill-item--networking:focus,
  .skill-item--secondary.skill-item--networking.skill-item[selected] {
    background: var(--networking-dark-extra-low);
  }
  
  .skill-item--primary.skill-item--networking.skill-item[selected]:hover .skill-item__block,
  .skill-item--primary.skill-item--networking.skill-item[selected]:focus .skill-item__block,
  .skill-item--secondary.skill-item--networking.skill-item[selected]:hover,
  .skill-item--secondary.skill-item--networking.skill-item[selected]:focus {
    background: var(--networking-dark-low) !important;
  }
 
`);
