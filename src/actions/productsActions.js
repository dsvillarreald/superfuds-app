import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCTS_LIST_FAIL
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