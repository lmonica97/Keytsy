import * as CategoryApiUtil from '../utils/category';

export const RECEIVE_ALL_CATEGORY = 'RECEIVE_ALL_CATEGORY';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveAllCategory = (products) => {
    debugger
    return {
        type: RECEIVE_ALL_CATEGORY,
        products
    }
}

export const receiveAllCategories = (categories) => {
    debugger 
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories
    }
}

export const fetchAllCategory = (categoryId) => dispatch => {
    debugger
    return CategoryApiUtil.fetchAllProducts(categoryId)
        .then(products => dispatch(receiveAllCategory(products)))
}

export const fetchAllCategories = () => dispatch => {
    debugger
    return CategoryApiUtil.fetchAllCategories()
        .then(categories => dispatch(receiveAllCategories(categories)))
}