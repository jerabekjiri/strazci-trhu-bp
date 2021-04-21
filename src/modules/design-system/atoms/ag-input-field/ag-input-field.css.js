import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-input-field', css`

  :host {
    width: 100%;
    display: block;
  }

  .input-box {
    width: 100%;
    display: flex;
    color: var(--main-light);
  }

  .input-box__icon-wrapper {
    display: flex;
    align-items: flex-end;
  }

  .input-box__icon-wrapper__icon {
    color: var(--my-soul);
    background-color: var(--main);
    margin-bottom: 16px;
  }

  .input-box__content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .input-box__content__label {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding: 0 8px 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    display: flex;
  }

  .input-box__content__label__required {
    color: var(--error);
    margin-left: 4px;
    font-size: 16px;
  }

  .input-box__content__input {
    display: flex;
    border: none;
    outline: none;
    background: transparent;
    box-sizing: border-box;
    margin-bottom: 0px; // safari fix
    padding-left: 8px;
    font-size: 16px;
    line-height: 24px;
    color: var(--main);
    border-bottom: 1px solid var(--main);
    height: 24px;
    padding: 0 8px;
    font-family: 'Chakra Petch', sans-serif;
  }
  
  .input-box__content__input[readonly] {
    border-bottom: none;
  }

  .input-box__content__input::placeholder {
    font-size: 16px;
    line-height: 24px;
    color: var(--main-light-low);
  }
  
  .input-box__content__input:focus::placeholder {
    color: transparent;
  }

  .error-box {
    color: var(--error);
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    height: 16px;
    padding-left: 8px;
  }

  .input-box__content__input:focus {
    background-color: var(--main-extra-low);
    border-bottom: 1px solid var(--main-light);
  }
  
  .input-box__content__input[readonly]:focus {
    border: none;
  }

  .input-box:not([disabled]):not([readonly]):not([error]):hover .input-box__content__input {
    background-color: var(--main-extra-low);
    color: var(--main-light);
  }

  .input-box:not([disabled]):not([readonly]):not([error]):hover .input-box__icon-wrapper__icon {
    background-color: var(--main-light);
  }

  .input-box:not([disabled]):not([readonly]):not([error]):hover .input-box__content__input {
    border-bottom: 1px solid var(--main-light);
  }

  .input-box[disabled] .input-box__content__input {
    background: var(--main-extra-low-disabled);
    border-bottom: 1px solid var(--main-disabled);
    cursor: not-allowed;
  }

  .input-box[disabled] .input-box__icon-wrapper__icon {
    background: var(--main-disabled);
  }
  
  .input-box[disabled] .input-box__content__label {
    color: var(--main-disabled);
  }

  .input-box[error] .input-box__content__input {
    background-color: var(--error-extra-low);
    border-bottom: 1px solid var(--error);
  }

  .input-box[error] .input-box__icon-wrapper__icon {
    background-color: var(--error)
  }
  
  .input-box[error] .input-box__content__label {
    color: var(--error)
  }
  
`);
