import * as CategoryApiUtil from '../utils/category';

export const RECEIVE_ALL_CATEGORY = 'RECEIVE_ALL_CATEGORY';
export const RECEIVE_ALL_CATEGORIES = 'RECEIVE_ALL_CATEGORIES';

export const receiveAllCategory = (products) => {
    return {
        type: RECEIVE_ALL_CATEGORY,
        products
    }
}

export const receiveAllCategories = (categories) => {
    return {
        type: RECEIVE_ALL_CATEGORIES,
        categories
    }
}

export const fetchAllCategory = (categoryId) => dispatch => {
    return CategoryApiUtil.fetchAllProducts(categoryId)
        .then(products => dispatch(receiveAllCategory(products)))
}

export const fetchAllCategories = () => dispatch => {
    return CategoryApiUtil.fetchAllCategories()
        .then(categories => dispatch(receiveAllCategories(categories)))
}