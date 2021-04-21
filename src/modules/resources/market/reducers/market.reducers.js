import * as R from 'ramda';

import {
  GET_PRODUCTS_STARTED,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILED,
  GET_CATEGORIES_SUCCESS,
  GET_CATEGORIES_STARTED,
  GET_CATEGORIES_FAILED,
  GET_GROUPS_STARTED,
  GET_GROUPS_SUCCESS,
  GET_GROUPS_FAILED,
  BUY_PRODUCT_STARTED,
  BUY_PRODUCT_SUCCESS,
  BUY_PRODUCT_FAILED
} from '../actions/market.actions';
import {
  APPLY_SORT,
  FILTER_AVAILABILITY, 
  FILTER_GROUP,
  FILTER_CATEGORY,
  FILTER_ACTIVATED
} from '../actions/filter.actions';
import {
  INVENTORY_INIT,
  GET_INVENTORY_STARTED,
  GET_INVENTORY_SUCCESS,
  GET_INVENTORY_FAILED,
  ACTIVATE_PRODUCT_INVENTORY_STARTED,
  ACTIVATE_PRODUCT_INVENTORY_SUCCESS,
  ACTIVATE_PRODUCT_INVENTORY_FAILED
} from '../actions/inventory.actions';
import {
  MODAL_INIT,
  MODAL_SELECT_PRODUCT
} from '../actions/modal.actions';

const INITIAL_STATE = {
  products: [],
  inventory: [],
  categories: [],
  groups: [],
  filters: {}
};
  
const MarketResourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_PRODUCTS_STARTED:
    case GET_CATEGORIES_STARTED:
    case GET_GROUPS_STARTED:
    case GET_INVENTORY_STARTED:
    case BUY_PRODUCT_STARTED:
    case ACTIVATE_PRODUCT_INVENTORY_STARTED:
      return {
        ...state,
        error: null,
        isLoading: true
      }
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        error: null,
        isLoading: false
      }
    case GET_PRODUCTS_FAILED:
      return {
        ...state,
        products: [],
        error: action.error,
        isLoading: false
      }
    case GET_CATEGORIES_SUCCESS: 
      return {
        ...state,
        categories: action.payload,
        error: null,
        isLoading: false
      } 
    case GET_GROUPS_SUCCESS: 
      return {
        ...state,
        groups: action.payload,
        error: null,
        isLoading: false
      } 
    case GET_CATEGORIES_FAILED: 
      return {
        ...state,
        categories: [],
        error: action.error,
        isLoading: false
      } 
    case GET_GROUPS_FAILED:
      return {
        ...state,
        groups: [],
        error: action.error,
        isLoading: false
      }
    case INVENTORY_INIT: {
      return {
        ...state,
        isLoading: false,
        activatedProductSuccess: null,
        error: null
      }
    }
    case GET_INVENTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        inventory: action.payload
      }
    case GET_INVENTORY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        inventory: null,
      }
    case BUY_PRODUCT_SUCCESS:
      return {
        ...state,
        buyProductSuccess: action.payload,
        isLoading: false
      }
    case BUY_PRODUCT_FAILED:
      return {
        ...state,
        buyProductSuccess: null,
        error: action.error,
        isLoading: false
      }
    case MODAL_INIT:
      return {
        ...state,
        selectedProduct: null,
        buyProductSuccess: null
      }
    case MODAL_SELECT_PRODUCT: 
      return {
        ...state,
        selectedProduct: action.product
      }
    case APPLY_SORT:
      return {
        ...state,
        sort: action.sort
      }
    case FILTER_GROUP: 
    case FILTER_CATEGORY:
    case FILTER_AVAILABILITY:
      if(state.filters[action.filterType] && (state.filters[action.filterType].value === Number(action.filter))) {
        return {
          ...state,
          filters: () => R.dissoc(action.filterType, state.filters)
        }
      }

      return {
        ...state,
        filters: { ...state.filters, [action.filterType]: { value: Number(action.filter) }}
      }
    case FILTER_ACTIVATED:
      return {
        ...state,
        filterInventory: action.filter
      }
    case ACTIVATE_PRODUCT_INVENTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        activatedProductSuccess: true,
        error: null,
        inventory: state.inventory.map(
          product => product.id == action.id ? {...product, activated: true} : product
        )
      }
    case ACTIVATE_PRODUCT_INVENTORY_FAILED: 
      return {
        ...state,
        activatedProductSuccess: null,
        error:  action.error,
        isLoading: false
      }
    default:
      return state
  }
}
  
  export default MarketResourceReducer;