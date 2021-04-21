import { PlayerControllerApi } from '../../../api/PlayerControllerApi'

const api = new PlayerControllerApi('');

import {
  gameStatusStarted,
  gameStatusSuccess,
  gameStatusFailed
} from './actions/game-status.actions';

export const gameStatusResource = () => (dispatch) => {
  dispatch(gameStatusStarted);
  api.getPlayerGameStatus().then(
    result => dispatch(gameStatusSuccess(result)),
    error => dispatch(gameStatusFailed(error))
  )
}