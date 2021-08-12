import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCTS_LIST_FAIL
} from '../types';

const initialState = {
    description: null,
    productsList: [],
    error: null,
    loading: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_PRODUCTS_LIST:
            return {
                ...state,
                description: action.payload,
                loading: true
            }
        case GET_PRODUCTS_LIST_SUCCESS:
            return {
                ...state,
                description: null,
                productsList: action.payload,
                loading: false
            }
        case GET_PRODUCTS_LIST_FAIL:
            return {
                ...state,
                description: action.payload
            }
        default:
            return state
    }
}
