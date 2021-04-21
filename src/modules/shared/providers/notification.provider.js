import { AppLocalizeBehavior } from '@polymer/app-localize-behavior/app-localize-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import { PolymerElement } from "@polymer/polymer";
import '@polymer/paper-toast/paper-toast';

export class NotificationProvider extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {

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

  constructor() {
    super();
    this.timeToProvide = 5000;
  }

  showErrorMessage(error) {
    const _id = '_' + Math.random().toString(36).substr(2, 9);
    const _body = document.querySelector('body');
    const _errorToast = document.createElement('paper-toast');
    _errorToast.setAttribute('id', _id);
    _errorToast.setAttribute('class', 'fit-bottom error-toast');
    _errorToast.setAttribute('text', error);
    _errorToast.setAttribute('duration', this.timeToProvide);
    _body.appendChild(_errorToast);
    _errorToast.open();
  }

  showSuccessMessage(message) {
    const _id = '_' + Math.random().toString(36).substr(2, 9);
    const _body = document.querySelector('body');
    const _successToast = document.createElement('paper-toast');
    _successToast.setAttribute('id', _id);
    _successToast.setAttribute('class', 'fit-bottom success-toast');
    _successToast.setAttribute('text', message);
    _successToast.setAttribute('duration', this.timeToProvide);
    _body.appendChild(_successToast);
    _successToast.open();
  }

}

customElements.define('notification-provider', NotificationProvider);