import { combineReducers } from 'redux';

import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    // como la clave es igual al valor, no es necesario ponerla
    productList,
    activeProduct,
    cart
});

export default rootReducer;