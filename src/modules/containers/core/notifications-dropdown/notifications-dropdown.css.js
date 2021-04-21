import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('notifications-dropdown', css`
  .notifications-box {
    width: 352px;
    height: 360px;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 575px) {
    .notifications-box {
      width: 100%;
    }
  }

  .notifications-box__title {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 8px 24px;
    color: var(--main-light);
  }

  .notifications-box__content {
    padding: 0px 8px;
    height: 100%;
  }

  .notifications-box__content__item {
    padding-bottom: 4px;
  }

  .spinner {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .spinner paper-spinner {
    align-self: center;
    margin-top: -20px;
  }

  .notifications-box__content__not-found-message {
    display: flex;
    justify-content: center;
    height: 100%;
  }

  .notifications-box__content__not-found-message span {
    align-self: center;
    margin-top: -40px;
    color: var(--warning);
  }

  .notifications-box__content__no-more-notification {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--warning);
    height: 48px;
    width: 100%;
    font-size: 12px;
  }
`);
