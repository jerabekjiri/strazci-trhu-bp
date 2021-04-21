import { html, PolymerElement } from '@polymer/polymer';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class';
import { AppLocalizeBehavior } from '@polymer/app-localize-behavior';

import { ValidatorProvider, VALIDATOR_TYPES } from '../../../shared/providers/validator.provider';
import '../ag-icon/ag-icon';

import './ag-input-field.css';

export class AgInputField extends mixinBehaviors([AppLocalizeBehavior], PolymerElement) {

  constructor() {
    super();
    this.id = `input_${Math.random().toString(36).substr(2, 9)}`;
    this.validatorProvider = new ValidatorProvider();
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
      },
      type: {
        type: String,
        value: 'text'
      },
      icon: {
        type: String,
        value: ''
      },
      label: {
        type: String,
        value: ''
      },
      readonly: {
        type: Boolean,
        value: false
      },
      autofocus: {
        type: Boolean,
        value: false
      },
      placeholder: {
        type: String,
        value: ''
      },
      disabled: {
        type: Boolean,
        value: false
      },
      value: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      error: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      validators: {
        type: Array,
        value: []
      }
    }
  }

  static get template() {
    return html`
      <style include="ag-input-field-style"></style>
      
      <div class="input-box"
           on-click="_focusIn"
           disabled$="[[disabled]]"
           readonly$="[[readonly]]"
           error$="[[_hasError(error)]]">
        <template is="dom-if" if="[[_hasValue(icon)]]">
          <div class="input-box__icon-wrapper">
            <ag-icon size="tiny"
                     icon$="[[icon]]"
                     class="input-box__icon-wrapper__icon">
            </ag-icon>
          </div>
        </template>  
        <div class="input-box__content">
          <label class="input-box__content__label" for="[[id]]">
            {{label}}
            <template is="dom-if" if="[[_isRequired(validators)]]">
              <span class="input-box__content__label__required">*</span>
            </template>
          </label>
          <input class$="input-box__content__input{{_getIconClass(icon)}}"
                 id$="[[id]]"
                 type="[[type]]"
                 placeholder="[[placeholder]]"
                 readonly$="[[readonly]]"
                 required="[[required]]"
                 autofocus="[[autofocus]]"
                 minlength$="[[minlength]]"
                 disabled="[[disabled]]"
                 value="{{value::input}}"
                 on-input="_onValueChange">
          <div class="error-box">
            <template is="dom-if" if="[[error]]">{{localize(error.key, error.param)}}</template>
          </div>
        </div>
      </div>
    `;
  }

  _getIconClass(icon) {
    return !!icon ? '' : ' input-box__content__input--icon';
  }

  _hasValue(val) {
    return !!val;
  }

  _focusIn() {
    !this.disabled && this.shadowRoot.querySelector(`#${this.id}`).focus();
  }

  _hasError(error) {
    return error && !error.valid;
  }

  _onValueChange(e) {
    setTimeout(() => {
      if ((this.validators || []).length > 0) {
        const errorResult = this.validatorProvider.validate(this.value, this.validators);
        this.error = errorResult;
      }
    });
  }

  _isRequired(validators) {
    return validators.find(validator => validator === VALIDATOR_TYPES.REQUIRED);
  }

}

customElements.define('ag-input-field', AgInputField);
