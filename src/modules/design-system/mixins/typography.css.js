import { css } from 'lit-element';

export const typography = css`
  :host {
    --headline1: {
      font-weight: bold;
      font-size: 32px;
      line-height: 40px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: var(--main-extra-light);
    }
    --headline2: {
      font-weight: normal;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: var(--main-extra-light);
    }
    --headline2--plus: {
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;    
      letter-spacing: 0.2px;
      text-transform: uppercase;
      font-family: 'Chakra Petch', sans-serif;
      color: var(--main-extra-light);
    }
    --headline3: {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.2px;
      text-transform: uppercase;
      color: var(--main);
    }
    --headline4: {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: 0.2px;
      color: var(--main);
    }
    --headline5: {
      font-weight: normal;
      font-size: 14px;
      line-height: 20px; 
      color: var(--main);
    }
    --body1: {
      font-size: 16px;
      line-height: 24px;
      color: var(--main);
    }
    --body1--plus: {
      font-weight: bold;
      font-size: 16px;
      line-height: 24px;
      color: var(--main);
    }
    --body1--em: {
      font-style: italic;
      font-size: 16px;
      line-height: 24px;
      color: var(--main);
    }
    --body2: {
      font-size: 14px;
      line-height: 20px;  
      color: var(--main);
    }
    --body2--plus: {
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;  
      color: var(--main);
    }
    --body2--em: {
      font-style: italic;
      font-size: 14px;
      line-height: 20px;  
      color: var(--main);
    }
    --body3: {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: var(--main);
    }
    --body3--plus: {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: var(--main);
    }
    --button: {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: 0.2px;
      color: var(--main);
    }
    --label: {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      color: var(--main);
    }
  }
`;