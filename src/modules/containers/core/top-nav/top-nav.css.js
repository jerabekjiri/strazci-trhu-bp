import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('top-nav', css`
  .top-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top-nav--opened {
    height: 477px;
  }
  .top-nav--closed {
    height: 165px;
  }
  .top-nav__bar {
    height: 72px;
    min-height: 72px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .top-nav__bar__left-content,
  .top-nav__bar__right-content {
    display: flex;
    flex-direction: row;
  }
  .top-nav__bar__left-content__title {
    display: flex;
    align-self: center;
    font-size: 18px;
    font-weight: 600;
    color: var(--main-light);
    text-transform: uppercase;
    align-items: center;
  }
  .top-nav__bar__left-content__title ag-icon-button {
    margin-right: 8px;
  }
  .top-nav__bar__right-content ag-top-screen-button {
    margin-left: 8px;
  } 
  .top-nav__player {
    min-height: 0;
    overflow: hidden;
    flex-grow: 1;
  }
  .top-nav__wrapper {
    padding-top: 48px;
  }
  .top-nav__wrapper__nav {
    display: flex;
    justify-content: center;
    min-height: 45px;
  }
  .player-dropdown {
    width: 100%;
  }
  @media only screen and (max-width: 575px) {
    .top-nav--opened,
    .top-nav--closed {
      height: 72px;
    }
    .top-nav__wrapper__nav {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      border-top: 1px solid var(--main);
      height: 56px;
      display: flex;
      justify-content: space-around;
      box-sizing: border-box;
    }
  }
`);
