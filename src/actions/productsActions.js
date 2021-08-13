import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCTS_LIST_FAIL,
    ADD_PRODUCT_CAR,
    REMOVE_PRODUCT_CAR,
    UPDATE_PRODUCT
} from '../types';
import clientAxios from '../services/Axios';

export function getProductsList() {
    return async (dispatch) => {
        dispatch(getProducts('start method get for produts List'));
        try {
            const response = await clientAxios.get('/product.json');
            if (response.status === 200) {
                dispatch(getProductsSuccess(response.data));
            }

        } catch (e) {
            dispatch(getProductsFail(e));
        }
    }
}

export function setProductCar(product) {
    return async (dispatch) => {
        product['amount_of_prod'] = 1;
        dispatch(removeProduct(product));
        dispatch(addProduct(product));
    }
}

export function removeProductCar(product) {
    return async (dispatch) => {
        dispatch(removeProduct(product));
    }
}

export function updateProductCar(product) {
    return async (dispatch) => {
        dispatch(updateProduct(product));
    }
}


const getProducts = state => ({
    type: GET_PRODUCTS_LIST,
    payload: state
});

const getProductsSuccess = state => ({
    type: GET_PRODUCTS_LIST_SUCCESS,
    payload: state
});

const getProductsFail = state => ({
    type: GET_PRODUCTS_LIST_FAIL,
    payload: state
});

const addProduct = state => ({
    type: ADD_PRODUCT_CAR,
    payload: state
});

const removeProduct = state => ({
    type: REMOVE_PRODUCT_CAR,
    payload: state
});

const updateProduct = state => ({
    type: UPDATE_PRODUCT,
    payload: state
});