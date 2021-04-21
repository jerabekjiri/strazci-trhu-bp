export const GET_PREVIEWS_STARTED = 'GET_PREVIEWS_STARTED';
export const GET_PREVIEWS_SUCCESS = 'GET_PREVIEWS_SUCCESS';
export const GET_PREVIEWS_FAILED  = 'GET_PREVIEWS_FAILED';

export const INIT_SIMULATOR        = 'INIT_SIMULATOR';
export const GET_SIMULATOR_STARTED = 'GET_SIMULATOR_STARTED';
export const GET_SIMULATOR_SUCCESS = 'GET_SIMULATOR_SUCCESS';
export const GET_SIMULATOR_FAILED  = 'GET_SIMULATOR_FAILED';

export const SET_FAILED_SIMULATOR = 'SET_FAILED_SIMULATOR';

export const INIT_RATING = 'INIT_RATING';
export const SET_RATING  = 'SET_RATING';

export const SET_TAB = 'SET_TAB';

export const getPreviewsStarted = () => ({
  type: GET_PREVIEWS_STARTED
})
export const getPreviewsSuccess = (previews) => ({
  type: GET_PREVIEWS_SUCCESS,
  previews
})
export const getPreviewsFailed = (error) => ({
  type: GET_PREVIEWS_FAILED,
  error
})

export const initSimulator = () => ({
  type: INIT_SIMULATOR
})
export const getSimulatorStarted = () => ({
  type: GET_SIMULATOR_STARTED
})
export const getSimulatorSuccess = (simulator) => ({
  type: GET_SIMULATOR_SUCCESS,
  simulator
})
export const getSimulatorFailed = (error) => ({
  type: GET_SIMULATOR_FAILED,
  error
})

export const _setTab = (tab) => ({
  type: SET_TAB,
  tab
})

export const setLoading = () => _setTab('LOADING');
export const setProlog = () => _setTab('PROLOG');
export const setStory = () => _setTab('STORY');
export const setSummarry = () => _setTab('SUMMARY');

export const initRating = () => ({
  type: INIT_RATING
})

export const setRating = (rating) => ({
  type: SET_RATING,
  rating
})


export const setFailedSimulator = () => ({
  type: SET_FAILED_SIMULATOR
})




  