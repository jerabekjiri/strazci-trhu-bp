import { css } from 'lit-element'

import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('invitation-modal', css`
  .invitation-modal__form {
    width: 300px;
  }
  .invitation-modal__actions {
    min-width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`);
