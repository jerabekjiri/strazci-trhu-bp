import { css } from 'lit-element';

export const errorColorPalette = css`

  :host {
    --error-dark: #BF213C;
    --error: #E84949;
    --error-light: #EA6957;
    
    --error-dark-low: rgba(191, 33, 60, 0.2);
    --error-low: rgba(232, 73, 73, 0.2);
    --error-light-low: rgba(234, 105, 87, 0.2);

    --error-dark-extra-low: rgba(191, 33, 60, 0.1);
    --error-extra-low: rgba(232, 73, 73, 0.1);
    --error-light-extra-low: rgba(234, 105, 87, 0.1);

    --error-glow: {
      background: var(--error);
      box-shadow: 0px 0px 20px var(--error-dark);
    }

    --error-light-glow: {
      background: var(--error-light);
      box-shadow: 0px 0px 20px var(--error);
    }
  }
`;
