import { PolymerElement, html } from '@polymer/polymer';

import './application/application.module';

export class RootModule extends PolymerElement {

  static get template() {
    return html `
      <application-module></application-module>
    `;
  }

}

customElements.define('root-module', RootModule);
