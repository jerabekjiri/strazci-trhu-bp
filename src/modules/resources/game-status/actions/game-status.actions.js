export const GAME_STATUS_STARTED = 'GAME_STATUS_STARTED';
export const GAME_STATUS_SUCCESS = 'GAME_STATUS_SUCCESS';
export const GAME_STATUS_FAILED = 'GAME_STATUS_FAILED';

export const SUBSTRACT_CURRENCY_GAME_STATUS = 'SUBSTRACT_CURRENCY_GAME_STATUS';

export const gameStatusStarted = () => ({
  type: GAME_STATUS_STARTED
})

export const gameStatusSuccess = (payload) => ({
  type: GAME_STATUS_SUCCESS,
  payload
})

export const gameStatusFailed = (error) => ({
  type: GAME_STATUS_FAILED,
  error
})

export const substractCurrencyGameStatus = (currency) => ({
  type: SUBSTRACT_CURRENCY_GAME_STATUS,
  currency
}) 