import { html, PolymerElement } from '@polymer/polymer';
import { Router } from '@vaadin/router';
import { DESIGN_SYSTEM_ROUTES } from './design-system-routing.config';

import './atoms/ag-main-menu-item/ag-main-menu-item';
import './design-system.css';

export class DesignSystemModule extends PolymerElement {

  constructor() {
    super();
  }

  connectedCallback() {
    super.connectedCallback();
    this._router = new Router(this.shadowRoot.querySelector('#design-system-routlet-outlet'));
    this._router.setRoutes(DESIGN_SYSTEM_ROUTES);
    this.selected = location.pathname;
  }

  static get template() {
    return html`
      <style include="design-system-style"></style>
      <div class="design-system">
        <div class="design-system__navigation">
          <ag-main-menu> 
            <ag-main-menu-item on-click="_navigate"
                               icon="mg-skills:electricity"
                               data-link="/design-system/welcome"
                               selected$="{{_isSelected('/design-system/welcome', selected)}}">
              Welcome
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               icon="mg-skills:gas"
                               data-link="/design-system/color-palette"
                               selected$="{{_isSelected('/design-system/color-palette', selected)}}">
              Color palette
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/typography"
                               icon="mg-skills:mzu"
                               selected$="{{_isSelected('/design-system/typography', selected)}}">
              Typography
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               icon="mg-skills:fve"
                               data-link="/design-system/spacing"
                               selected$="{{_isSelected('/design-system/spacing', selected)}}">
              Spacing
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               icon="mg-skills:energy-management"
                               data-link="/design-system/button"
                               selected$="{{_isSelected('/design-system/button', selected)}}">
              Button
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/hyperlink"
                               selected$="{{_isSelected('/design-system/hyperlink', selected)}}">
              Hyperlink
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/icon"
                               selected$="{{_isSelected('/design-system/icon', selected)}}">
              Icons
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/icon-button"
                               selected$="{{_isSelected('/design-system/icon-button', selected)}}">
              Icon button
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/progress-bar"
                               selected$="{{_isSelected('/design-system/progress-bar', selected)}}">
              Progress bar
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/atomic-tile"
                               selected$="{{_isSelected('/design-system/atomic-tile', selected)}}">
              Atomic tile
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/tooltip"
                               selected$="{{_isSelected('/design-system/tooltip', selected)}}">
              Tooltip
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/vertical-menu-item"
                               selected$="{{_isSelected('/design-system/vertical-menu-item', selected)}}">
              Vertical menu item
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/textarea"
                               selected$="{{_isSelected('/design-system/textarea', selected)}}">
              Textarea
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/horizontal-menu-item"
                               selected$="{{_isSelected('/design-system/horizontal-menu-item', selected)}}">
              Horizontal menu item               
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/top-screen-button"
                               selected$="{{_isSelected('/design-system/top-screen-button', selected)}}">
              Top screen button
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/skill-point-tile"
                               selected$="{{_isSelected('/design-system/skill-point-tile', selected)}}">
              Skill point tile
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/main-menu-item"
                               selected$="{{_isSelected('/design-system/main-menu-item', selected)}}">
              Main menu item
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"
                               data-link="/design-system/skill-item"
                               selected$="{{_isSelected('/design-system/skill-item', selected)}}">
              Skill item
            </ag-main-menu-item>
            <ag-main-menu-item on-click="_navigate"                               
                               data-link="/design-system/input-field"
                               selected$="{{_isSelected('/design-system/input-field', selected)}}">
              Input field
            </ag-main-menu-item>
          </ag-main-menu>
        </div>
        <div class="design-system__content">
          <router-routlet id="design-system-routlet-outlet"></router-routlet>
        </div>
      </div>
    `;
  }

  _navigate(e) {
    if (this.selected !== e.target.dataset.link) {
      Router.go(e.target.dataset.link);
    }
  }

  _isSelected(pageUrl, selected) {
    return pageUrl === selected;
  }
}

customElements.define('design-system-module', DesignSystemModule);
