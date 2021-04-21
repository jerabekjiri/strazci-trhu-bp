export const GET_PRODUCTS_STARTED = 'GET_PRODUCTS_STARTED';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_FAILED  = 'GET_PRODUCTS_FAILED';
  
export const GET_CATEGORIES_STARTED = 'GET_CATEGORIES_STARTED';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILED  = 'GET_CATEGORIES_FAILED';

export const GET_GROUPS_STARTED = 'GET_GROUPS_STARTED';
export const GET_GROUPS_SUCCESS = 'GET_GROUPS_SUCCESS';
export const GET_GROUPS_FAILED  = 'GET_GROUPS_FAILED';

export const BUY_PRODUCT_STARTED = 'BUY_PRODUCT_STARTED';
export const BUY_PRODUCT_SUCCESS = 'BUY_PRODUCT_SUCCESS';
export const BUY_PRODUCT_FAILED  = 'BUY_PRODUCT_FAILED';

export const getProductsStarted = () => ({
    type: GET_PRODUCTS_STARTED
})
export const getProductsSuccess = (payload) => ({
    type: GET_PRODUCTS_SUCCESS,
    payload
})
export const getProductsFailed = (error) => ({
    type: GET_PRODUCTS_FAILED,
    error
})

export const buyProductStarted = () => ({
    type: BUY_PRODUCT_STARTED
})
export const buyProductSuccess = (payload) => ({
    type: BUY_PRODUCT_SUCCESS,
    payload
})
export const buyProductFailed = (error) => ({
    type: BUY_PRODUCT_FAILED,
    error
})


export const getCategoriesStarted = () => ({
    type: GET_CATEGORIES_STARTED
})
export const getCategoriesSuccess = (payload) => ({
    type: GET_CATEGORIES_SUCCESS,
    payload
})
export const getCategoriesFailed = (error) => ({
    type: GET_CATEGORIES_FAILED,
    error
})

export const getGroupsStarted = () => ({
    type: GET_GROUPS_STARTED
})
export const getGroupsSuccess = (payload) => ({
    type: GET_GROUPS_SUCCESS,
    payload
})
export const getGroupsFailed = (error) => ({
    type: GET_GROUPS_FAILED,
    error
})

