import { css } from 'lit-element';

export const skillsColorPalette = css`

  :host {

    /* Product */

    --product-dark: #ED6C14;
    --product: #FF8B24;
    --product-light: #FFA750;
    
    --product-dark-low: rgba(237, 108, 20, 0.2);
    --product-low: rgba(255, 139, 36, 0.2);
    --product-light-low: rgba(255, 167, 80, 0.2);

    --product-dark-extra-low: rgba(237, 108, 20, 0.1);
    --product-extra-low: rgba(255, 139, 36, 0.1);
    --product-light-extra-low: rgba(255, 167, 80, 0.1);

    --product-glow: {
      background: var(--product);
      box-shadow: 0px 0px 20px var(--product-dark);
    }
    --product-light-glow: {
      background: var(--product-light);
      box-shadow: 0px 0px 20px var(--product);
    }

    /* Communication */

    --communication-dark: #1C51C6;
    --communication: #2B67E9;
    --communication-light: #3A90EF;
    
    --communication-dark-low: rgba(28, 81, 198, 0.2);
    --communication-low: rgba(43, 103, 233, 0.2);
    --communication-light-low: rgba(58, 144, 239, 0.2);

    --communication-dark-extra-low: rgba(28, 81, 198, 0.1);
    --communication-extra-low: rgba(43, 103, 233, 0.1);
    --communication-light-extra-low: rgba(58, 144, 239, 0.1);

    --communication-glow: {
      background: var(--communication);
      box-shadow: 0px 0px 20px var(--communication-dark);
    }
    --communication-light-glow: {
      background: var(--communication-light);
      box-shadow: 0px 0px 20px var(--communication);
    }

    /* Organising */

    --organising-dark: #CCCCCC;
    --organising: #EDEDED;
    --organising-light: #FFFFFF;
    
    --organising-dark-low: rgba(204, 204, 204, 0.2);
    --organising-low: rgba(237, 237, 237, 0.2);
    --organising-light-low: rgba(255, 255, 255, 0.2);

    --organising-dark-extra-low: rgba(204, 204, 204, 0.1);
    --organising-extra-low: rgba(237, 237, 237, 0.1);
    --organising-light-extra-low: rgba(255, 255, 255, 0.1);

    --organising-glow: {
      background: var(--organising);
      box-shadow: 0px 0px 20px var(--organising-dark);
    }
    --organising-light-glow: {
      background: var(--organising-light);
      box-shadow: 0px 0px 20px var(--organising);
    }

    /* Prospecting */

    --prospecting-dark: #723BEA;
    --prospecting: #9750FF;
    --prospecting-light: #B36CFF;
    
    --prospecting-dark-low: rgba(114, 59, 234, 0.2);
    --prospecting-low: rgba(151, 80, 255, 0.2);
    --prospecting-light-low: rgba(179, 108, 255, 0.2);

    --prospecting-dark-extra-low: rgba(114, 59, 234, 0.1);
    --prospecting-extra-low: rgba(151, 80, 255, 0.1);
    --prospecting-light-extra-low: rgba(179, 108, 255, 0.1);

    --prospecting-glow: {
      background: var(--prospecting);
      box-shadow: 0px 0px 20px var(--prospecting-dark);
    }
    --prospecting-light-glow: {
      background: var(--prospecting-light);
      box-shadow: 0px 0px 20px var(--prospecting);
    }

    /* Business */

    --business-dark: #1DD882;
    --business: #28E9AD;
    --business-light: #46F9CE;
    
    --business-dark-low: rgba(29, 216, 130, 0.2);
    --business-low: rgba(40, 233, 173, 0.2);
    --business-light-low: rgba(70, 249, 206, 0.2);

    --business-dark-extra-low: rgba(29, 216, 130, 0.1);
    --business-extra-low: rgba(40, 233, 173, 0.1);
    --business-light-extra-low: rgba(70, 249, 206, 0.1);

    --business-glow: {
      background: var(--business);
      box-shadow: 0px 0px 20px var(--business-dark);
    }
    --business-light-glow: {
      background: var(--business-light);
      box-shadow: 0px 0px 20px var(--business);
    }

    /* Networking */

    --networking-dark: #CC0DBE;
    --networking: #E313E9;
    --networking-light: #F24DFF;
    
    --networking-dark-low: rgba(204, 13, 190, 0.2);
    --networking-low: rgba(227, 19, 233, 0.2);
    --networking-light-low: rgba(242, 77, 255, 0.2);

    --networking-dark-extra-low: rgba(204, 13, 190, 0.1);
    --networking-extra-low: rgba(227, 19, 233, 0.1);
    --networking-light-extra-low: rgba(242, 77, 255, 0.1);

    --networking-glow: {
      background: var(--networking);
      box-shadow: 0px 0px 20px var(--networking-dark);
    }
    --networking-light-glow: {
      background: var(--networking-light);
      box-shadow: 0px 0px 20px var(--networking);
    }
  }
`;
