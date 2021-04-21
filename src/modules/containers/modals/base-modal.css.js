import { css } from 'lit-element'

import { registerStyleModule } from '../../utils/registerStyleModule.fnc';

registerStyleModule('base-modal', css`
  :host {
    position: fixed;
    height: 100%;
    width: 100%;
    color: white;
    z-index: 2001;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    backdrop-filter: blur(4px);
  }

  .wrapper {
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`);
