import { createSelector } from 'reselect';
import * as R from 'ramda';

import { applySort, applyFilters } from '../../../utils/market.fnc';

const _marketResourceSelector = state => R.path(['entity', 'market'], state);

export const marketStateSelector = createSelector(
  _marketResourceSelector,
  ( state ) => state
)

export const productsMarketResourceSelector = createSelector(
  _marketResourceSelector,
  ({ products, sort, filters }) => applySort(applyFilters(products, filters), sort)
)

export const inventoryMarketResourceSelector = createSelector(
  _marketResourceSelector,
  ({ inventory, filterInventory }) => applyFilters(inventory, { filterInventory })
)

export const inventoryStateSelector = createSelector(
  _marketResourceSelector,
  ( state ) => state
)

export const categoriesMarketResourceSelector = createSelector(
  _marketResourceSelector,
  ({ categories }) => categories
)

export const groupsMarketResourceSelecrtor = createSelector(
  _marketResourceSelector,
  ({ groups }) => groups
)

export const selectedProductModalSelector = createSelector(
  _marketResourceSelector,
  ({ selectedProduct }) => selectedProduct
)