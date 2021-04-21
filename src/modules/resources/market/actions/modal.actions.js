export const MODAL_INIT = 'MODAL_INIT';
export const MODAL_SELECT_PRODUCT = 'MODAL_SELECT_PRODUCT';

export const selectProductModal = (product) => ({
    type: MODAL_SELECT_PRODUCT,
    product
});

export const modalInit = () => ({
    type: MODAL_INIT
})