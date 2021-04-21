import { css } from 'lit-element';
import { registerStyleModule } from '../../../../../modules/utils/registerStyleModule.fnc';

registerStyleModule('inventory-page', css`
  :host {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .items {
    width: 950px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
  }  

  .inventory-page__title {
    color: var(--main);
    margin: auto;
  }
`);