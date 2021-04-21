import { PolymerElement, html } from '@polymer/polymer';

export class MissionDetailModal extends PolymerElement {

  static get template() {
    return html `
      MissionDetailModal
    `;
  }
}

customElements.define('mission-detail-modal', MissionDetailModal);
