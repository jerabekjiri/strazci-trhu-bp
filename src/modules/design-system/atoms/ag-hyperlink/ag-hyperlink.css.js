import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-hyperlink', css`
  
  :host {
    --hyperlink: {
      width: fit-content;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
  
  .hyperlink {
    @apply --hyperlink;
    color: var(--main-light);
  }
  
  .hyperlink:hover {
    color: var(--main-extra-light);
    text-shadow: 0px 0px 20px #80EAFF;
  }
  
  .hyperlink:active {
    color: var(--main-light);
    text-shadow: 0px 0px 20px #33CCFF;
  }
  
  .hyperlink--selected,
  .hyperlink--selected:hover {
    @apply --hyperlink;
    color: var(--main-dark);
  }
  
  .hyperlink--large--normal {
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
  }
  
  .hyperlink--large--bold {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
  }
  
  .hyperlink--normal--normal {
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }
  
  .hyperlink--normal--bold {
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
  }
  
  .hyperlink--small--normal {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }
  
  .hyperlink--small--bold {
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
  }
   
`);
