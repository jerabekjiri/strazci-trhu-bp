import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-icon', css`
  :host {
    display: block;
  }
  .icon--tiny {
    height: 24px;
    width: 24px;
  }
  .icon--small {
    height: 32px;
    width: 32px;
  }
  .icon--normal {
    width: 48px;
    height: 48px;
  }
  .icon--large {
    height: 96px;
    width: 96px;
  }
`);
