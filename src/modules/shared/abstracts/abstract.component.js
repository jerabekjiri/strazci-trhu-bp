import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement } from '@polymer/polymer';
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior';
import { SIZES } from '../../../application/application.config';

export class AbstractComponent extends mixinBehaviors([AppLocalizeBehavior, IronResizableBehavior], PolymerElement) {

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('iron-resize', () => this.sizeChanged());
  }

  sizeChanged() {
    this.isPhone = SIZES.isPhone();
    this.isTablet = SIZES.isTablet();
    this.isDesktop = SIZES.isDesktop();
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

}