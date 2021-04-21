import { css } from 'lit-element';

export const successColorPalette = css`

  :host {
    --success-dark: #599E2D;
    --success: #86C64E;
    --success-light: #ACD367;
    
    --success-dark-low: rgba(89, 158, 45, 0.2);
    --success-low: rgba(134, 198, 78, 0.2);
    --success-light-low: rgba(172, 211, 103, 0.2);

    --success-dark-extra-low: rgba(89, 158, 45, 0.1);
    --success-extra-low: rgba(134, 198, 78, 0.1);
    --success-light-extra-low: rgba(172, 211, 103, 0.1);

    --success-glow: {
      background: var(--success);
      box-shadow: 0px 0px 20px var(--success-dark);
    }

    --success-light-glow: {
      background: var(--success-light);
      box-shadow: 0px 0px 20px var(--success);
    }
  }
`;
