import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-loader', css`}
  :host {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ag-loader {
    color: var(--white);
  }
`);
