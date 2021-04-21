import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-top-screen-button', css`

  .top-screen-button {
    position: relative;
    display: flex;
    justify-content: center;
    width: 48px;
    height: 56px;
    transition: height 0.05s ease-out;
    transition: height 0.05s ease-in;
    cursor: pointer;
    outline: none;
    background: transparent;
    border: none;
  }

  .top-screen-button__counter {
    position: absolute;
    height: 24px;
    width: 16px;
    background: red;
    top: 0;
    right: 0;
    transition: height 0.05s ease-out;
    transition: height 0.05s ease-in;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    color: var(--my-soul);
  }

  .top-screen-button ag-icon {
    position: absolute;
    bottom: 0;
  }

  .top-screen-button::-moz-focus-inner {
    border: 0;
  }

  .dropdown__content {
    background-color: var(--app-background);
  }

  .top-screen-button:hover .top-screen-button__counter {
    height: calc(64px - 32px);
    transition: height 0.05s ease-out;
    transition: height 0.05s ease-in;
  }

  .top-screen-button[selected] .top-screen-button__counter {
    height: calc(72px - 32px);
  }

  .top-screen-button:focus,
  .top-screen-button:hover {
    height: 64px;
  }

  .top-screen-button[selected] {
    height: 72px;
  }

  /* main */

  .top-screen-button--main {
    @apply --edge-box-bottom-main;
    background-color: var(--main-extra-low);
    color: var(--main);
  }

  .top-screen-button--main:focus,
  .top-screen-button--main:hover {
    @apply --edge-box-bottom-main-hover;
    background-color: var(--main-light-extra-low);
    color: var(--main-light);
  }

  .top-screen-button--main:active {
    @apply --edge-box-bottom-main-pressed;
    background-color: var(--main-dark-extra-low);
    color: var(--main-dark);
  }

  .top-screen-button--main[selected] {
    @apply --main-glow;
    color: var(--my-soul);
  }

  .top-screen-button--main .top-screen-button__counter {
    background-color: var(--main);
  }

  .top-screen-button--main:hover .top-screen-button__counter {
    background-color: var(--main-light);
  }

  .top-screen-button--main:active .top-screen-button__counter {
    background-color: var(--main-dark);
  }

  .top-screen-button--main[selected] .top-screen-button__counter {
    display: none;
  }

  .dropdown__content--main {
    @apply --edge-box;
    background-color: var(--app-background);
    box-shadow: inset 0px 0px 0px 1px var(--main-low);
  }

  /* warning */

  .top-screen-button--warning {
    @apply --edge-box-bottom-warning;
    background-color: var(--warning-extra-low);
    color: var(--warning);
  }

  .top-screen-button--warning:focus,
  .top-screen-button--warning:hover {
    @apply --edge-box-bottom-warning-hover;
    background-color: var(--warning-light-extra-low);
    color: var(--warning-light);
  }

  .top-screen-button--warning:active {
    @apply --edge-box-bottom-warning-pressed;
    background-color: var(--warning-dark-extra-low);
    color: var(--warning-dark);
  }

  .top-screen-button--warning[selected] {
    @apply --warning-glow;
    color: var(--my-soul);
  }

  .top-screen-button--warning .top-screen-button__counter {
    background-color: var(--warning);
  }

  .top-screen-button--warning:hover .top-screen-button__counter {
    background-color: var(--warning-light);
  }

  .top-screen-button--warning:active .top-screen-button__counter {
    background-color: var(--warning-dark);
  }

  .top-screen-button--warning[selected] .top-screen-button__counter {
    display: none;
  }

  .dropdown__content--warning {
    @apply --edge-box-warning;
    background-color: var(--app-background);
    box-shadow: inset 0px 0px 0px 1px var(--warning-low);
  }

  @media only screen and (max-width: 575px) {
    .dropdown {
      width: calc(100% - 30px) !important;
      max-width: calc(100% - 30px) !important;
      margin-left: 15px;
    }
  }
`);
