import { css } from 'lit-element';
import { registerStyleModule } from '../../utils/registerStyleModule.fnc';

registerStyleModule('scroll-bar', css`
 
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }
    
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--main-low); 
  }
     
  /* Handle */
  ::-webkit-scrollbar-thumb {
    border-radius: 7.99999px;
    background: var(--main-extra-low);
  }
    
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
  background: var(--main); 
  }

  @media only screen and (max-width: 767px) {
    ::-webkit-scrollbar {
      width: 6px;
    }
  }
   
`);