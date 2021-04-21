import { css } from 'lit-element';

export const edgeBorder = css`

  :host {
    --edge-box: {
      background:
        linear-gradient(to right, var(--main) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--main) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--main) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--main) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--main) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--main) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--main) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--main) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    --edge-box-hover: {
      background:
        linear-gradient(to right, #80EAFF 1px, transparent 1px) 0 0,
        linear-gradient(to right, #80EAFF 1px, transparent 1px) 0 100%,
        linear-gradient(to left, #80EAFF 1px, transparent 1px) 100% 0,
        linear-gradient(to left, #80EAFF 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, #80EAFF 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, #80EAFF 1px, transparent 1px) 100% 0,
        linear-gradient(to top, #80EAFF 1px, transparent 1px) 0 100%,
        linear-gradient(to top, #80EAFF 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-pressed: {
      background:
        linear-gradient(to right, #009FDD 1px, transparent 1px) 0 0,
        linear-gradient(to right, #009FDD 1px, transparent 1px) 0 100%,
        linear-gradient(to left, #009FDD 1px, transparent 1px) 100% 0,
        linear-gradient(to left, #009FDD 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, #009FDD 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, #009FDD 1px, transparent 1px) 100% 0,
        linear-gradient(to top, #009FDD 1px, transparent 1px) 0 100%,
        linear-gradient(to top, #009FDD 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-selected: {
      background:
        linear-gradient(to right, #FFFFFF 1px, transparent 1px) 0 0,
        linear-gradient(to right, #FFFFFF 1px, transparent 1px) 0 100%,
        linear-gradient(to left, #FFFFFF 1px, transparent 1px) 100% 0,
        linear-gradient(to left, #FFFFFF 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, #FFFFFF 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, #FFFFFF 1px, transparent 1px) 100% 0,
        linear-gradient(to top, #FFFFFF 1px, transparent 1px) 0 100%,
        linear-gradient(to top, #FFFFFF 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
        
    --edge-box-disabled: {
      background:
        linear-gradient(to right, var(--main-disabled) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--main-disabled) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--main-disabled) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--main-disabled) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--main-disabled) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--main-disabled) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--main-disabled) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--main-disabled) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    
    --edge-box-product: {
      background:
        linear-gradient(to right, var(--product) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--product) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--product) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--product) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--product) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--product) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--product) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--product) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    
    --edge-box-communication: {
      background:
        linear-gradient(to right, var(--communication) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--communication) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--communication) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--communication) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--communication) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--communication) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--communication) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--communication) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    
    --edge-box-organising: {
      background:
        linear-gradient(to right, var(--organising) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--organising) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--organising) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--organising) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--organising) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--organising) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--organising) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--organising) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    
    --edge-box-prospecting: {
      background:
        linear-gradient(to right, var(--prospecting) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--prospecting) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--prospecting) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--prospecting) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--prospecting) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--prospecting) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--prospecting) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--prospecting) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    
    --edge-box-business: {
      background:
        linear-gradient(to right, var(--business) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--business) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--business) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--business) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--business) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--business) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--business) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--business) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    
    --edge-box-networking: {
      background:
        linear-gradient(to right, var(--networking) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--networking) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--networking) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--networking) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--networking) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--networking) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--networking) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--networking) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
       }

    --edge-box-warning: {
      background:
        linear-gradient(to right, var(--warning) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--warning) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--warning) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--warning) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--warning) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--warning) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--warning) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--warning) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-white: {
      background:
        linear-gradient(to right, var(--white) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--white) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--white) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--white) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--white) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--white) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--white) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--white) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-focus: {
      background:
        linear-gradient(to right, var(--main-disabled) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--main-disabled) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--main-disabled) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--main-disabled) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--main-disabled) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--main-disabled) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--main-disabled) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--main-disabled) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-notification: {
      background:
        linear-gradient(to right, var(--warning) 1px, transparent 1px) 0 0,
        linear-gradient(to right, var(--warning) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--warning) 1px, transparent 1px) 100% 0,
        linear-gradient(to left, var(--warning) 1px, transparent 1px) 100% 100%,
        linear-gradient(to bottom, var(--warning) 1px, transparent 1px) 0 0,
        linear-gradient(to bottom, var(--warning) 1px, transparent 1px) 100% 0,
        linear-gradient(to top, var(--warning) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--warning) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    /* BOTTOMS */

    --edge-box-bottom-main: {
      background:
        linear-gradient(to right, var(--main) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--main) 1px, transparent 1px) 100% 100%,
        linear-gradient(to top, var(--main) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--main) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-bottom-main-hover: {
      background:
        linear-gradient(to right, var(--main-light) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--main-light) 1px, transparent 1px) 100% 100%,
        linear-gradient(to top, var(--main-light) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--main-light) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-bottom-main-pressed: {
      background:
        linear-gradient(to right, var(--main-dark) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--main-dark) 1px, transparent 1px) 100% 100%,
        linear-gradient(to top, var(--main-dark) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--main-dark) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-bottom-warning: {
      background:
        linear-gradient(to right, var(--warning) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--warning) 1px, transparent 1px) 100% 100%,
        linear-gradient(to top, var(--warning) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--warning) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-bottom-warning-hover: {
      background:
        linear-gradient(to right, var(--warning-light) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--warning-light) 1px, transparent 1px) 100% 100%,
        linear-gradient(to top, var(--warning-light) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--warning-light) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-bottom-warning-pressed: {
      background:
        linear-gradient(to right, var(--warning-dark) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--warning-dark) 1px, transparent 1px) 100% 100%,
        linear-gradient(to top, var(--warning-dark) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--warning-dark) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }

    --edge-box-bottom-focus: {
      background:
        linear-gradient(to right, var(--main-disabled) 1px, transparent 1px) 0 100%,
        linear-gradient(to left, var(--main-disabled) 1px, transparent 1px) 100% 100%,
        linear-gradient(to top, var(--main-disabled) 1px, transparent 1px) 0 100%,
        linear-gradient(to top, var(--main-disabled) 1px, transparent 1px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 8px 8px;
    }
    
  }
`;
