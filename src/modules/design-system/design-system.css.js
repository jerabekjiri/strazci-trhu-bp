import { css } from 'lit-element';
import { registerStyleModule } from '../utils/registerStyleModule.fnc';

registerStyleModule('design-system', css`
  .design-system {
    color: white;
    display: flex;
    flex-direction: row;
    width: calc(100% + 30px);
    height: calc(100% + 60px);
    margin-top: -30px;
  }

  .design-system__navigation {
    width: 250px;
    min-width: 250px;
    padding: 8px;
    overflow-y: auto;
    padding-top: 30px;
  }

  .design-system__content {
    flex-grow: 1;
    overflow-y: auto;
    padding: 8px;
    padding-top: 30px;
  }
`);