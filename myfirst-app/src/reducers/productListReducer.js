import {
    // importamos todos los posibles casos para productList
    FETCH_PRODUCTS_INIT,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    SAVE_PRODUCT_FAILURE,
    SAVE_PRODUCT_SUCCESS,
    SAVE_PRODUCT_INIT,
    //con from le decimos desde donde los importamos
} from '../actions/types';
// tambien importamos el initialState
import initialState from './initialState';

// creamos el reducer para productList
export default function productListReducer(state = initialState.productList, action) {
    // segun el action.type que reciba, realizará un caso u otro
    switch (action.type) {
        case FETCH_PRODUCTS_INIT:
            //utilizamos ECMAScript6 para reducir el codigo
            return {
                // creamos una copia de productList modificando loading
                ...state,
                loading: true,
                error: null
            };

        case FETCH_PRODUCTS_FAILURE:
        // en caso de error al cargar productos, añadimos el error
            return {
                ...state,
                // pondriamos productos a cero
                products: [],
                error: action.payload,
                loading: false
            };

        case FETCH_PRODUCTS_SUCCESS:
        // en caso de exito al cargar productos
            return {
                ...state,
                // los productos seran los que nos llegan de payload
                products: action.payload,
                error: null,
                loading: false
            };

        case SAVE_PRODUCT_INIT:
            return {
                ...state,
                loading: true,
                error: null
            };

        case SAVE_PRODUCT_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false
            };

        case SAVE_PRODUCT_SUCCESS:
            return {
                ...state,
                // en caso de que el producto se salve, creamos una copia del 
                // array products, añadiendo el nuevo array de productos guardados
                products: [...state.products, action.payload],
                error: null,
                loading: false
            };
        // si no nos llega ningun caso, devolvemos el state por defecto
        default:
            return state;
    }
}