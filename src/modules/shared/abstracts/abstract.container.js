import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement } from '@polymer/polymer';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';

import { SIZES } from '../../../application/application.config';

export class AbstractContainer extends mixinBehaviors([AppLocalizeBehavior, IronResizableBehavior], PolymerElement) {

  constructor() {
    super();
    this.errorElement = this.createErrorElement();
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('iron-resize', (e) => this.sizeChanged(e));
  }

  static get observers() {
    return [
      '$errorHandlers(containerHandlers)'
    ]
  }

  sizeChanged(e) {
    this.isPhone = SIZES.isPhone();
    this.isTablet = SIZES.isTablet();
    this.isDesktop = SIZES.isDesktop();
  }

  $errorHandlers(errorHandlers) {
    /* TODO: Generic Error handler for containers */
    // R.o(
    //   R.map((parsetHandler = { value: {} }) => {
    //     const errorBlock = this.shadowRoot.querySelector('#' + parsetHandler.key + 'ContainerHandler');
    //     if (parsetHandler.value.error) {
    //       this.errorElement.id = parsetHandler.key + 'ErrorIcon';
    //       errorBlock.style.display = 'none';
    //       errorBlock.parentElement.insertBefore(this.errorElement, errorBlock);
    //     } else {
    //       const errorIconElement = this.shadowRoot.querySelector('#' + parsetHandler.key + 'ErrorIcon');
    //       if (errorIconElement) {
    //         errorIconElement.remove();
    //         errorBlock.style.display = 'flex';
    //       }
    //     }
    //   }),
    //   R.mapObjIndexed((value, key) => ({ value, key }))
    // )(errorHandlers);
  }

  static get properties() {
    return {
      language: {
        value: 'cs'
      },
      resources: {
        value() {
          this.loadResources(this.resolveUrl('src/assets/translations/' + this.language + '.json'));
        }
      }
    }
  }

  createErrorElement() {
    const errorIconElement = document.createElement('iron-icon');
    errorIconElement.setAttribute('icon', 'icons:report-problem');
    return errorIconElement;
  }
}