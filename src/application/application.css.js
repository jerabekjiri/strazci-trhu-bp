import { css } from 'lit-element'
import { registerStyleModule } from '../modules/utils/registerStyleModule.fnc';

import { typography } from '../modules/design-system/mixins/typography.css';
import { mainColorPalette } from '../modules/design-system/mixins/main-color-palette';
import { errorColorPalette } from '../modules/design-system/mixins/error-color-palette';
import { skillsColorPalette } from '../modules/design-system/mixins/skills-color-palette';
import { successColorPalette } from '../modules/design-system/mixins/success-color-palette';
import { warningColorPalette } from '../modules/design-system/mixins/warning-color-palette';
import { edgeBorder } from '../modules/design-system/mixins/edge-border.css';

registerStyleModule('application', css`
  ${typography}
  ${mainColorPalette}
  ${errorColorPalette}
  ${skillsColorPalette}
  ${successColorPalette}
  ${warningColorPalette}
  ${edgeBorder}

  .application {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    height: 100%;
  }

  .application__side-nav {
    width: 280px;
    min-width: 280px;
  }

  .application__side-nav--closed {
    width: 80px;
  }

  .application__side-nav-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 16px;
  }

  .application__side-nav-content__content {
    display: flex;
    align-content: stretch;
    flex-grow: 1;
    height: 100%;
    overflow-y: auto;
    margin-top: 48px;
  }

  .application__side-nav-content__content__outlet {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .overlay {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: var(--my-soul);
    opacity: .5;
    z-index: 1000;
  }
  
  @media only screen and (min-width: 1200px) {
    .application__side-nav-content {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  }

  @media only screen and (max-width: 767px) {
    .application__side-nav,
    .application__side-nav--closed {
      position: fixed;
      z-index: 1001;
      background-color: var(--app-background);
      height: 100%;
    }

    .application__side-nav--closed {
      width: 0;
    }

    .application__side-nav-content {
      padding: 0 8px;
    }

    .application__side-nav-content__content {
      margin-right: -8px;
      padding-right: 8px;
    }
  }

  @media only screen and (max-width: 575px) {
    .application__side-nav {
      width: 100%;
    }

    .application__side-nav-content {
      box-sizing: border-box;
      padding-bottom: 56px;
    }

    .application__side-nav-content__content {
      margin-top: 0;
    }
  }
`);
