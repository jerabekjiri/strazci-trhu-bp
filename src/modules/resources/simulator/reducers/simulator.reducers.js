import {
    SET_TAB,
    INIT_SIMULATOR,
    GET_PREVIEWS_STARTED,
    GET_PREVIEWS_SUCCESS,
    GET_PREVIEWS_FAILED,
    GET_SIMULATOR_STARTED,
    GET_SIMULATOR_SUCCESS,
    GET_SIMULATOR_FAILED,
    INIT_RATING,
    SET_RATING,
    SET_FAILED_SIMULATOR
  } from '../actions/simulator.actions';

import { story } from '../../../../assets/telefonat.json'
import { schuzka } from '../../../../assets/schuzka.json';

  const INITIAL_STATE = {
    rating: [],
    selectedSimulator: {},
    selectedTab: null
};

    
const simulatorResourceReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SET_TAB: 
            return {
                ...state,
                selectedTab: action.tab 
            }
        case INIT_SIMULATOR: 
            return {
                ...state,
                selectedTab: 'LOADING',
                selectedSimulator: {},
                isLoading: false,
                error: null,
            }
        case GET_PREVIEWS_STARTED: 
        case GET_SIMULATOR_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case GET_PREVIEWS_SUCCESS:
            return {
                ...state,
                previews: action.previews,
                isLoading: false,
            }
        case GET_PREVIEWS_FAILED: 
            return {
                ...state,
                previews: null,
                isLoading: false
            }
        case GET_SIMULATOR_SUCCESS: 
            const selectedSimulator = {
                ...action.simulator,
                story: JSON.parse(action.simulator.story) 
            }
            return {
                ...state,
                selectedSimulator: selectedSimulator,
                isLoading: false
            }
        case GET_SIMULATOR_FAILED: 
            return {
                ...state,
                selectedSimulator: null,
                isLoading: false
            }
        case INIT_RATING: 
            return {
                ...state,
                rating: [],
                error: false,
                isLoading: false
            }
        case SET_RATING:
            return {
                ...state,
                rating: [...state.rating, action.rating],
                isLoading: false
            }
        case SET_FAILED_SIMULATOR: 
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}
  
  export default simulatorResourceReducer;