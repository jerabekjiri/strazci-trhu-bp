import { html } from '@polymer/polymer';
import { AbstractComponent } from '../../../../../modules/shared/abstracts/abstract.component';
import { connect } from 'pwa-helpers/connect-mixin';
import { store } from '../../../../../modules/libraries/store/store';
import { setProlog } from '../../../../../modules/resources/simulator/actions/simulator.actions';

import '../../../../../modules/design-system/atoms/ag-button/ag-button.js';
import '../../../../../modules/shared/atoms/ag-border-box';
import '../../../../../modules/design-system/atoms/ag-progress-bar/ag-progress-bar';

import './screens.css';

export class LoaderScreen extends connect(store)(AbstractComponent) {
  static get properties() {
    return {
      messages: Array
    }
  }

  constructor() {
    super();

    this.waitTime = 3500;
    this.animateTime = 4000;
    this.fadeTime = 100;
  }
  
  connectedCallback() {
    super.connectedCallback();
    
    this.progressBarLoading(this.messages.length, this.animateTime);
    this._animate = "hidden";

    let i = 0;
    this.loadingProgress = 1;

    setTimeout(() => {
      this._animate = 'slide-in';
    }, this.fadeTime)

    this.smoothLoad = '';
    this._typeWrite(this.messages[i]);
    
    setTimeout(() =>{
      this._animate = "slide-out";
    }, this.waitTime)

    let loadingInterval = setInterval(() => {
      
      if(i >= this.messages.length - 1) {
        clearInterval(loadingInterval);
        this.finished();
        return;
      }
      else
        i++;

      setTimeout(() => {
        this._animate = 'slide-in';
      }, this.fadeTime)

      this.smoothLoad = '';
      this._typeWrite(this.messages[i]);
      
      setTimeout(() =>{
        this._animate = "slide-out";
      }, this.waitTime)

    }, this.animateTime);
  }

  static get template() {
    return html`
      <style include="screens-simulator-style"></style>

      <div class="loader-screen">
        <div class="messages">
          <div class$="message [[_animate]]">
            <ag-border-box>
              <div class="box">
                [[smoothLoad]]
              </div>
            </ag-border-box>
          </div>
        </div>
        <ag-progress-bar size="small" value="[[loadingProgress]]" max="100" color="main"></ag-progress-bar>
      </div>
    `;
  }

  progressBarLoading(len, time) {
    let delta = 0;
    const totalTime = len * time;
    const interval = totalTime / 100;
   const progressBar = setInterval(() => {
      this.loadingProgress++;
      delta =+ time;
      if(delta >= totalTime)
        clearInterval(progressBar);
    }, interval)
  }

  finished() {
    store.dispatch(setProlog());
  }

  _typeWrite(text) {
    let interval = 100;
    let i = 0;

    let typeWriteInterval = setInterval(() => {
      this.smoothLoad += text.charAt(i);

      if(i >= text.length - 1) {
        clearInterval(typeWriteInterval);
        this.smoothLoad = text;
      }
      else {
        i++;
        interval = Math.random()*100 + 50;
      }
    }, interval);
  }
}
    
customElements.define('loader-screen-simulator', LoaderScreen);
