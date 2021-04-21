import { css } from 'lit-element';

export const warningColorPalette = css`

  :host {
    --warning-dark: #CE890F;
    --warning: #F4C625;
    --warning-light: #F9DA3E;
    
    --warning-dark-low: rgba(206, 137, 15, 0.2);
    --warning-low: rgba(244, 198, 37, 0.2);
    --warning-light-low: rgba(249, 218, 62, 0.2);

    --warning-dark-extra-low: rgba(206, 137, 15, 0.1);
    --warning-extra-low: rgba(244, 198, 37, 0.1);
    --warning-light-extra-low: rgba(249, 218, 62, 0.1);

    --warning-glow: {
      background: var(--warning);
      box-shadow: 0px 0px 20px var(--warning-dark);
    }

    --warning-light-glow: {
      background: var(--warning-light);
      box-shadow: 0px 0px 20px var(--warning);
    }
  }
`;
