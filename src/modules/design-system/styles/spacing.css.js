import { css } from 'lit-element';
import { registerStyleModule } from '../../utils/registerStyleModule.fnc';

registerStyleModule('spacing', css`
  .space-xxs {
    margin: 4px;
  }
  .space-xs {
    margin: 8px;
  }
  .space-s {
    margin: 16px;
  }
  .space-m {
    margin: 24px;
  }
  .space-l {
    margin: 32px;
  }
  .space-xl {
    margin: 40px;
  }
  .space-xxl {
    margin: 48px;
  }
  .space-xxxl {
    margin: 56px;
  }
`);