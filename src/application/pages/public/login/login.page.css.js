import { css } from 'lit-element';
import { registerStyleModule } from '../../../../modules/utils/registerStyleModule.fnc';

registerStyleModule('login-page', css`
  .login-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(/src/assets/images/app-background.png) no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login-page__title {
    font-size: 32px;
    line-height: 40px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: var(--white);
    padding: 0 32px;
    text-align: center;
  }

  .login-page__box {
    @apply --edge-box;
    box-shadow: inset 0px 0px 0px 1px rgba(51, 204, 255, .2);
    width: 480px;
    height: 400px;
    padding: 24px;
    background-color: var(--app-background-transparent);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    box-sizing: border-box;
  }

  .login-page__box__header {
    font-size: 20px;
    line-height: 24px;
    color: var(--white);
    letter-spacing: 0.2px;
    text-transform: uppercase;
    display: flex;
    justify-content: space-between;
  }

  .login-page__box__header__buttons {
    display: flex;
    align-items: flex-start;
  }

  .login-page__box__header__buttons__button--cs {
    background-image: url(/src/assets/images/czech-republic.png);
  }

  .login-page__box__header__buttons__button--en {
    background-image: url(/src/assets/images/united-kingdom.png);
  }

  .login-page__box__header__buttons__button--en,
  .login-page__box__header__buttons__button--cs {
    width: 24px;
    height: 16px;
    background-position: center;
    cursor: pointer;
    padding: 0;
    border: none;
    cursor: pointer;
    margin-left: 5px;
  }

  .login-page__box__header__buttons__button--en:disabled,
  .login-page__box__header__buttons__button--cs:disabled {
    filter: grayscale(100%);
    cursor: not-allowed;
  }

  .login-page__box__form {
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .login-page__box__form paper-input {
    width: 100%;
    max-width: 260px;
  }

  .login-page__box__form ag-button {
    margin: 40px 0 16px;
  }

  .login-page__box__form__lost-password,
  .login-page__box__footer {
    display: flex;
    justify-content: center;
    color: var(--main);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }

  @media only screen and (max-width: 540px) {
    .login-page__box {
      width: 100%;
    }

    .login-page .login-page__box {
      width: calc(100% - 58px);
    }
  }
`);