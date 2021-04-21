import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('market-filters', css`
    .side-filter, .inventory-filter {
        display: block;
        width: 200px;
        color: white;
    } 
    .side-filter h1, 
    .inventory-filter h1 {
        color: var(--main);
    }  

    .top-filter__items {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    } 
    
    .top-filter__items__item {
        display:flex;
        width: 200px;
        height: 48px; 
        margin: 0px 16px 16px 0;
    } 
`);
