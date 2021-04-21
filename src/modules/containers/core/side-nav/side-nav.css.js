import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('side-nav', css`
  .side-nav {
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    box-sizing: border-box;
    justify-content: center;
    padding: 16px;
  }

  .side-nav__header--opened,
  .side-nav__header--closed {
    display: flex;
    height: 48px;
    color: var(--main);
    align-items: center;
  }

  .side-nav__header--opened {
    justify-content: flex-end;
  }

  .side-nav__header--closed {
    justify-content: center;
  }

  .side-nav__header ag-icon-button {
    max-width: 32px;
    text-align: center;
  }

  .side-nav__header span,
  .side-nav__header ag-icon-button {
    align-self: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .side-nav__nav-item {
    margin: 8px 0;
    box-sizing: border-box;
    width: 100%;
  }

  @media only screen and (max-width: 767px) {
    .side-nav--closed {
      padding: 0;
    } 
  }
`);