import { MarketControllerApi } from '../../../api/MarketControllerApi';
import { playerStateSelector } from '../game-status/selectors/game-status.selectors';  

import {
  getProductsStarted,
  getProductsSuccess,
  getProductsFailed,
  getCategoriesStarted,
  getCategoriesSuccess,
  getCategoriesFailed,
  getGroupsStarted,
  getGroupsSuccess,
  getGroupsFailed,
  buyProductStarted,
  buyProductSuccess,
  buyProductFailed
} from './actions/market.actions';
import {
  inventoryInit,
  getInventoryStarted,
  getInventorySuccess,
  getInventoryFailed,
  activateProductInventoryStarted,
  activateProductInventorySuccess,
  activateProductInventoryFailed
} from './actions/inventory.actions';
import {
  substractCurrencyGameStatus
} from '../game-status/actions/game-status.actions';

const marketApi = new MarketControllerApi('');

export const getProductsResource = (idPlayer) => (dispatch) => {
  dispatch(getProductsStarted());
  marketApi.getProducts(idPlayer).then(
    response => dispatch(getProductsSuccess(response)),
    error => dispatch(getProductsFailed(error))
  )
}

export const buyProductResource = ({ id, price }) => (dispatch, state) => {
  const { idPlayer } = playerStateSelector(state());

  const buyProductDto = {
    idProduct: id,
    idPlayer,
    price
  };

  dispatch(buyProductStarted());
  marketApi.buyProduct(buyProductDto).then(
    () => { 
      dispatch(buyProductSuccess(true));
      dispatch(substractCurrencyGameStatus(price));
    },
    error => dispatch(buyProductFailed(error))
  )
}

export const getCategoriesResource = () => (dispatch) => {
  dispatch(getCategoriesStarted());
  marketApi.getCategories().then(
    response => dispatch(getCategoriesSuccess(response)),
    error => dispatch(getCategoriesFailed(error))
  )
}

export const getGroupsResource = () => (dispatch) => {
  dispatch(getGroupsStarted());
  marketApi.getGroups().then(
    response => dispatch(getGroupsSuccess(response)),
    error => dispatch(getGroupsFailed(error))
  )
}

export const getInventoryResource = () => (dispatch, state) => {
  const { idPlayer } = playerStateSelector(state());

  dispatch(getInventoryStarted());
  marketApi.getInventory(idPlayer).then(
    response => dispatch(getInventorySuccess(response)),
    error => dispatch(getInventoryFailed(error))
  )
}

export const activateInventoryProductResource = (idProductInventory) => (dispatch) => {
  dispatch(activateProductInventoryStarted());
  marketApi.activateProductInventory(idProductInventory).then(
    () => {
      dispatch(activateProductInventorySuccess(idProductInventory));
      dispatch(inventoryInit());
    },
    error => dispatch(activateProductInventoryFailed(error))
  )
}