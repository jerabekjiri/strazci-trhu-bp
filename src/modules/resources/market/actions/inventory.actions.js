export const INVENTORY_INIT        = 'INVENTORY_INIT';
export const GET_INVENTORY_STARTED = 'GET_INVENTORY_STARTED';
export const GET_INVENTORY_SUCCESS = 'GET_INVENTORY_SUCCESS';
export const GET_INVENTORY_FAILED  = 'GET_INVENTORY_FAILED';

export const ACTIVATE_PRODUCT_INVENTORY_STARTED = 'ACTIVATE_PRODUCT_INVENTORY_STARTED';
export const ACTIVATE_PRODUCT_INVENTORY_SUCCESS = 'ACTIVATE_PRODUCT_INVENTORY_SUCCESS';
export const ACTIVATE_PRODUCT_INVENTORY_FAILED  = 'ACTIVATE_PRODUCT_INVENTORY_FAILED';

export const inventoryInit = () => ({
    type: INVENTORY_INIT
})

export const getInventoryStarted = () => ({
    type: GET_INVENTORY_STARTED
})
export const getInventorySuccess = (payload) => ({
    type: GET_INVENTORY_SUCCESS,
    payload
})
export const getInventoryFailed = (error) => ({
    type: GET_INVENTORY_FAILED,
    error
})


export const activateProductInventoryStarted = () => ({
    type: ACTIVATE_PRODUCT_INVENTORY_STARTED
})
export const activateProductInventorySuccess = (id) => ({
    type: ACTIVATE_PRODUCT_INVENTORY_SUCCESS,
    id
})
export const activateProductInventoryFailed = (error) => ({
    type: ACTIVATE_PRODUCT_INVENTORY_FAILED,
    error
})