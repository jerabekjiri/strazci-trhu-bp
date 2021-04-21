import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('top-game-status', css`
  .top-game-status {
    color: var(--main-light);
    height: 100%;
    display: flex;
    flex-wrap: nowrap
  }

  .top-game-status__block {
    display: flex;
    align-items: center;
    height: 100%;
    margin-left: 48px;
  }

  .top-game-status__block:first-of-type {
    margin-left: 0px;
  }

  .top-game-status__block__label {
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 700;
    margin-left: 16px;
    white-space: nowrap;
  }

  @media only screen and (max-width: 920px) {
    .top-game-status__block {
      margin-left: 4px;
    }
    
    .top-game-status__block__label {
      margin-left: 0;
      font-size: 12px;
    }
  }
`);
