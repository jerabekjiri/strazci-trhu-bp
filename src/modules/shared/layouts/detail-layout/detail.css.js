import { css } from 'lit-element';
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('detail-layout', css`
  :host {
    width: 100%;
  }
  .detail-layout {
    display: flex;
    height: 100%;
    overflow: hidden;
    flex-direction: column;
  }
  .detail-layout__actions {
    display: flex;
    align-items: center;
    min-height: 45px;
  }
  .detail-layout__actions__action-back {
    display: flex;
    align-items: center;
  }
  .detail-layout__actions__action-back:hover {
    cursor: pointer;
    background-color: gray;
  }
  .detail-layout__content {
    display: flex;
    overflow: auto;
    flex-direction: column;
  }
`);