import * as moment from 'moment';
import { MarketFiltersEnum } from '../enums/market-filters';

export const groupTypeToSentence = ({ id }) => {
  switch(id) {
    case 1:
      return "MARKET_GROUP_TYPE_TEAM_REWARD";
    case 2:
      return "MARKET_GROUP_TYPE_COMPANY_REWARD";
  }
}

export const availableDateFormat = (date) => {
  return moment.default(new Date(date)).format('D. M.');
}

export const applySort = (data, type = MarketFiltersEnum.POPULAR) => {
  switch(type) {
    case MarketFiltersEnum.POPULAR:
      return data.sort((a, b) => ( ((a.onStockLeft / a.onStock) > (b.onStockLeft / b.onStock)) ? 1 : -1 ) )
    case MarketFiltersEnum.MIN_PRICE:
      return data.sort((a, b) => (a.price > b.price) ? 1 : -1);
    case MarketFiltersEnum.MAX_PRICE:
      return data.sort((a, b) => (a.price < b.price) ? 1 : -1);
    case MarketFiltersEnum.MIN_COUNT:
      return data.sort((a, b) => (a.onStockLeft > b.onStockLeft) ? 1 : -1);
    case MarketFiltersEnum.MAX_COUNT:
      return data.sort((a, b) => (a.onStockLeft < b.onStockLeft) ? 1 : -1);
  }
}
  
const filterByAvailability = (data, value) => {
  switch(value) {
    case 1:
      return data.filter(item => item.onStockLeft > 0);
    case 0:
      return data.filter(item => item.onStockLeft === 0)
    default:
      return data;
  }
}
  
const filterByActivated = (data, value) => {
  switch(value) {
    case MarketFiltersEnum.ACTIVATED:
      return data.filter(item => item.activated === true);
    case MarketFiltersEnum.NOT_ACTIVATED:
      return data.filter(item => item.activated === false);
  }
}
  const filterByGroup = (data, id) => data.filter(item => item.group.id === id);
        
  const filterByCategory = (data, id) => data.filter(item => item.category.id === id);
  
  export const applyFilters = (products, { availability, group, category, filterInventory }) => {
    
    products = products.sort((a, b) => a.activated - b.activated);

    if(availability)
      products = filterByAvailability(products, availability.value);  
    
    if(group)
      products = filterByGroup(products, group.value);
  
    if(category)
      products = filterByCategory(products, category.value);  
  
    if(filterInventory) {
      products = filterByActivated(products, filterInventory);
    }
  
    return products;
  }
  
  