import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('player-profile', css`
  .player-profile {
    height: 100%;
    padding: 1px 56px;
    box-sizing: border-box;
    display: flex;
  }

  .player-profile__avatar {
    height: 100%;
    width: 416px;
    min-width: 416px;
    background: url(/src/assets/images/avatar_test.png) no-repeat;
    margin-right: 56px;
    background-size: auto 80%;
    background-position: center center;
    position: relative;
  }

  .player-profile__content {
    height: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .player-profile__content__experiences {
    width: 100%;
    display: flex;
    color: var(--main);
    align-items: center;
    margin-bottom: 16px;
  }

  .player-profile__content__experiences__label {
    color: var(--main-light);
    white-space: nowrap;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding-left: 8px;
  }

  .player-profile__content__resources {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }

  .resource {
    color: var(--main);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 8px;
  }

  .resource__label {
    font-size: 14px;
    line-height: 20px;
  }

  .resource__content {
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    color: var(--main-light);
    padding-top: 8px;
  }

  .player-info {
    position: absolute;
    color: white;
    top: 24px;
  }

  .player-info__name {
    letter-spacing: 0.2px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 32px;
    line-height: 40px;
  }

  .player-info__group {
    border-left: 4px solid var(--white);
    padding-left: 8px;
    font-size: 16px;
    line-height: 24px;
    margin-top: 8px;
  }

  @media only screen and (max-width: 1486px) and (min-width: 767px) {
    .player-profile__avatar {
      margin-right: 16px;
    }
  }

  @media only screen and (max-width: 1446px) and (min-width: 767px) {
    .player-profile {
      padding: 1px 16px;
    }
  }

  @media only screen and (max-width: 1336px) and (min-width: 767px) {
    .player-profile__avatar {
      padding: 1px 16px;
      width: 350px;
      min-width: 350px;
    }
  }

  @media only screen and (max-width: 1220px) and (min-width: 767px) {
    .player-profile__content__resources {
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 1000px) and (min-width: 767px) {
    .player-profile__avatar {
      width: 280px;
      min-width: 280px;
      background-position: 0 80px;
      background-size: 90%;
      margin-right: 0px;
    }
  }

  @media only screen and (max-width: 880px) and (min-width: 767px) {
    .player-profile__avatar {
      width: 190px;
      min-width: 190px;
      background-position: 0 125px;
      background-size: 90%;
      margin-right: 0;
      padding-right: 0;
    }

    .resource {
      margin: 0 4px;
    }
  }

  @media only screen and (max-width: 767px) {
    .player-profile {
      padding: 1px 16px;
    }
    .player-profile__avatar {
      margin-right: 0;
    }
    .player-profile__content__resources {
      flex-wrap: wrap;
    }
  }

  @media only screen and (max-width: 767px) {
    .player-profile__avatar {
      background-position: -50px center;
      width: 285px;
      min-width: 285px;
    }
  }

  @media only screen and (max-width: 575px) {
    .player-profile {
      box-sizing: border-box;
      position: relative;
      height: 472px;
      width: 100%;
      flex-direction: column;
      min-width: 320px;
    }

    .player-profile__avatar {
      margin-right: 0;
      width: 100%;
      min-width: 100%;
      height: 208px;
      min-height: 208px;
      background-position: right center;
    }

  }
  
`);
