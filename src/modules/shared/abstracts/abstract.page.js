import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement } from '@polymer/polymer';

export class AbstractPage extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {

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

  setLanguage(lang) {
    this.language = lang;
    this.loadResources(this.resolveUrl('src/assets/translations/' + this.language + '.json'));
  }

}