export const VALIDATOR_TYPES = {
  REQUIRED: 'REQUIRED',
  MIN_LENGTH: 'MIN_LENGTH',
  MAX_LENGTH: 'MAX_LENGTH',
  EMAIL: 'EMAIL'
}

const VALIDATORS = {
  [VALIDATOR_TYPES.REQUIRED]: {
    cond: (val) => !!val
  },
  [VALIDATOR_TYPES.MIN_LENGTH]: {
    cond: (val, min) => (val || '').length < min
  },
  [VALIDATOR_TYPES.MAX_LENGTH]: {
    cond: (val, max) => (val || '').length > max
  },
  [VALIDATOR_TYPES.EMAIL]: {
    cond: (val) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)
  }
}

export class ValidatorProvider {

  validate(value, validators) {
    let errorResult = null;
    validators.forEach(validator => {
      switch(validator) {
        case VALIDATOR_TYPES.REQUIRED:
          errorResult =  VALIDATORS.REQUIRED.cond(value) 
            ? { valid: true }
            : { valid: false, key: `VALIDATORS_${VALIDATOR_TYPES.REQUIRED}` };
          break;
        case VALIDATOR_TYPES.MIN_LENGTH:
          errorResult = VALIDATORS.MIN_LENGTH.cond(value, validator.minLength) 
            ? { valid: true }
            : { valid: false, key: `VALIDATORS_${VALIDATOR_TYPES.MIN_LENGTH}` };
          break;
        case VALIDATOR_TYPES.MAX_LENGTH:
          errorResult = VALIDATORS.MAX_LENGTH.cond(value, validator.maxLength) 
            ? { valid: true }
            : { valid: false, key: `VALIDATORS_${VALIDATOR_TYPES.MAX_LENGTH}` };
          break;
        case VALIDATOR_TYPES.EMAIL:
          errorResult = VALIDATORS.EMAIL.cond(value) 
            ? { valid: true }
            : { valid: false, key: `VALIDATORS_${VALIDATOR_TYPES.EMAIL}` };
          break;
        default: 
          errorResult = { valid: true };

      }
    });
    return errorResult;
  }

}