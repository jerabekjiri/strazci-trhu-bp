import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-notification-dropdown-row', css`
  :host {
    --ag-notification-dropdown-row: {
      width: 100%;
      height: 70px;
      padding: 8px 8px 8px 16px;
      display: flex;
      flex-direction: row;
      box-sizing: border-box;
    }

    --ag-notification-dropdown-row-title: {
      font-weight: 700;
      font-size: 14px;
    }

    --ag-notification-dropdown-row-text: {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
    }

    --ag-notification-dropdown-row-box: {
      display: flex;
      justify-content: flex-end;
      width: 32px;
      min-width: 32px;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      padding-right: 8px;
    }
  }

  .row--main {
    @apply --ag-notification-dropdown-row;
    background-color: var(--main-extra-low);
  }

  .row--main:hover {
    cursor: pointer;
    background-color: var(--main-light-extra-low);
  }

  .row--main:active {
    background-color: var(--main-dark-extra-low);
  }

  .row--main .left-box__title {
    @apply --ag-notification-dropdown-row-title;
    color: var(--main-light);
  }

  .row--main .left-box__text {
    @apply --ag-notification-dropdown-row-text;
    color: var(--main);
  }

  .row--main .right-box {
    @apply --ag-notification-dropdown-row-box;
    color: var(--main-light);
  }

  .row--main .left-box,
  .row--warning .left-box {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
  }

  .row--warning {
    @apply --ag-notification-dropdown-row;
    background-color: var(--warning-extra-low);
  }

  .row--warning:hover {
    cursor: pointer;
    background-color: var(--warning-light-extra-low);
  }

  .row--warning:active {
    background-color: var(--warning-dark-extra-low);
  }

  .row--warning .left-box__title {
    @apply --ag-notification-dropdown-row-title;
    color: var(--warning-light);
  }

  .row--warning .left-box__text {
    @apply --ag-notification-dropdown-row-text;
    color: var(--warning);
  }

  .row--warning .right-box {
    @apply --ag-notification-dropdown-row-box;
    color: var(--warning-light);
  }
`);
