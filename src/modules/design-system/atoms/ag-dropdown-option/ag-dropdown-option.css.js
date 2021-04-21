import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-dropdown-option', css`
  .ag-dropdown-option {
    height: 50px;
    width: 100%;
    color: var(--main);
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 16px;
    cursor: pointer;
    outline: none;
    overflow: visible;
  }

  .ag-dropdown-option__icon {
    margin-right: 16px;
  }

  .ag-dropdown-option:focus,
  .ag-dropdown-option:hover,
  .ag-dropdown-option:active .ag-dropdown-option__text {
    color: var(--main-light);
  }

  .ag-dropdown-option:active,
  .ag-dropdown-option:active .ag-dropdown-option__text {
    color: var(--main-dark);
  }

  .ag-dropdown-option:focus .ag-dropdown-option__text,
  .ag-dropdown-option:hover .ag-dropdown-option__text {
    text-shadow: 0px 0px 20px var(--main-light);
  }

  .ag-dropdown-option:active .ag-dropdown-option__text {
    text-shadow: 0px 0px 20px var(--main-dark);
  }
`);
