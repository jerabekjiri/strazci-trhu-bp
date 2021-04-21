import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';
import { edgeBorder } from '../../mixins/edge-border.css';

registerStyleModule('ag-modal', css`}
  ${edgeBorder}
  .ag-modal {
    @apply --edge-box;
    box-shadow: inset 0px 0px 0px 1px rgba(51, 204, 255, .2);
    width: 568px;
    height: 460px;
    background-color: var(--app-background);
    padding: 16px 16px 16px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .ag-modal__header {
    height: 48px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
    font-weight: 700;
  }

  .ag-modal__actions {
    width: 100%;
    padding: 8px 16px 8px 8px;
  }

  @media only screen and (max-width: 634px) {
    .ag-modal {
      width: calc(100vw - 64px);
    }
    .ag-modal__header {
      height: auto;
      align-items: center;
    }
  }
`);
