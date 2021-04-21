import { css } from 'lit-element';

export const mainColorPalette = css`

  :host {
    --app-background: #060A12;
    --app-background-transparent: rgba(4, 3, 30, 0.66);
    
    --my-soul: #000000;

    --white-dark: #E5E5E5;
    --white: #FFFFFF;
  
    --main-dark: #009FDD;
    --main: #33CCFF;
    --main-light: #80EAFF;
    --main-extra-light: #FFFFFF;
    --main-disabled: #7D7D7F;

    --main-dark-low: rgba(0, 159, 221, 0.2);
    --main-low: rgba(51, 204, 255, 0.2);
    --main-light-low: rgba(128, 234, 255, 0.2);
    --main-extra-light-low: rgba(255, 255, 255, 0.2);
    --main-low-disabled: rgba(125, 125, 127, 0.2);

    --main-dark-extra-low: rgba(0, 159, 221, 0.1);
    --main-extra-low: rgba(51, 204, 255, 0.1);
    --main-light-extra-low: rgba(128, 234, 255, 0.1);
    --main-extra-light-extra-low: rgba(255, 255, 255, 0.1);
    --main-extra-low-disabled: rgba(125, 125, 127, 0.1);

    --main-glow: {
      background: var(--main);
      box-shadow: 0px 0px 20px var(--main-dark);
    }
    --main-light-glow: {
      background: var(--main-light);
      box-shadow: 0px 0px 20px var(--main);
    }
    --main-extra-light-glow: {
      background: var(--main-extra-light);
      box-shadow: 0px 0px 20px var(--main-light);
    }
  }
`;
