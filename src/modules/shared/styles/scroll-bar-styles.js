import { html } from '@polymer/polymer';

export const scrollBarStyles = html`
  <style>
    /* width */
    ::-webkit-scrollbar {
      width: 4px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: var(--layout-white); 
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--layout-normal); 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: var(--layout-normal); 
    }
  </style>
`;