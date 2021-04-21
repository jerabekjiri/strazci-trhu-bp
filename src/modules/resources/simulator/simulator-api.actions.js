import { SimulatorControllerApi } from '../../../api/SimulatorControllerApi';
import { playerStateSelector } from '../game-status/selectors/game-status.selectors';  
import { simulatorStateSelector } from './selectors/simulator.selectors';
import { achievedRatingPercentage } from '../../../application/pages/secured/simulator/simulator.fnc';

import {
  getPreviewsStarted,
  getPreviewsSuccess,
  getPreviewsFailed,
  getSimulatorStarted,
  getSimulatorSuccess,
  getSimulatorFailed,
  setLoading
} from './actions/simulator.actions';

const simulatorApi = new SimulatorControllerApi('');

export const getPreviewsResource = () => (dispatch, state) => {
  const { idPlayer } = playerStateSelector(state());

  dispatch(getPreviewsStarted());
  simulatorApi.getPreviews(idPlayer).then(
    response => dispatch(getPreviewsSuccess(response)),
    error => dispatch(getPreviewsFailed(error))
  )
}

export const getSimulatorResource = (idSimulator) => (dispatch) => {
  dispatch(getSimulatorStarted());
  simulatorApi.getSimulator(idSimulator).then(
    response => { 
      dispatch(getSimulatorSuccess(response)); 
      dispatch(setLoading())
    },
    error => dispatch(getSimulatorFailed(error))
  )
}

export const setFinalRatingResource = () => (dispatch, state) => {
  const { idPlayer } = playerStateSelector(state());
  const { rating, selectedSimulator } = simulatorStateSelector(state());

  const saveResultDto = {
    idSimulator: selectedSimulator.id,
    result: achievedRatingPercentage(rating)
  }
  simulatorApi.saveResult(saveResultDto, idPlayer);
}