import {
    GET_PRODUCTS_LIST,
    GET_PRODUCTS_LIST_SUCCESS,
    GET_PRODUCTS_LIST_FAIL,
    ADD_PRODUCT_CAR,
    REMOVE_PRODUCT_CAR,
    UPDATE_PRODUCT
} from '../types';

const initialState = {
    description: null,
    productsList: [],
    productsInCart: [], 
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
        case ADD_PRODUCT_CAR:
            return {
                ...state,
                productsInCart: [...state.productsInCart, action.payload]
            }
        case REMOVE_PRODUCT_CAR:
            return {
                ...state,
                productsInCart: state.productsInCart.filter(product => product.id !== action.payload.id) 
            }
        case UPDATE_PRODUCT:
            return {
                ...state,
                productsInCart: action.payload
            }
        default:
            return state
    }
}
