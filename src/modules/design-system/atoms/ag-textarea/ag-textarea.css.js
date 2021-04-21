import { css } from 'lit-element'
import { registerStyleModule } from '../../../utils/registerStyleModule.fnc';

registerStyleModule('ag-textarea', css`
  
  paper-textarea.ag-textarea {
    overflow-y: auto;
    outline: none;
    width: 100%;
    max-height: 128px;
    
    --paper-input-container: {
      padding: 0;
    };

    --paper-input-container-input: {
      color: var(--main);
      background: transparent;  
      font-size: 14px;
    };
        
    --paper-input-container-label: {
      display: none;
    };
    
    --paper-input-container-underline: {
      display: none;
    };
    
    --paper-input-container-underline-focus: {
      display: none;
    };
    
    --paper-input-container-underline-disabled: {
      display: none;
    } ;
    
    --paper-font-caption: {
      display: none;
    };
  }
 
  paper-textarea {
    padding: 8px;
    border: 1px solid var(--main-low);
    -webkit-transition: all 0.30s ease-in-out;
    -moz-transition: all 0.30s ease-in-out;
    -ms-transition: all 0.30s ease-in-out;
    -o-transition: all 0.30s ease-in-out;
  }
  
  paper-textarea[focused] {
    border: 1px solid var(--main);
  }
`);
