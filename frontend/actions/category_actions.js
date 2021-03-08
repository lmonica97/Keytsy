import * as CategoryApiUtil from '../utils/category';

export const RECEIVE_ALL_CATEGORY = 'RECEIVE_ALL_CATEGORY';

export const receiveAllCategory = (products) => {
    return {
        type: RECEIVE_ALL_CATEGORY,
        products
    }
}

export const fetchAllCategory = (categoryId) => dispatch => {
    return CategoryApiUtil.fetchAllProducts(categoryId)
        .then(products => dispatch(receiveAllCategory(products)))
}