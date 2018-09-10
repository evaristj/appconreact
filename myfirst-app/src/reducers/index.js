import { combineReducers } from 'redux';
// despues de instalar el enrutador, lo importamos
import { routerReducer } from 'react-router-redux;'
import productList from './productListReducer';
import activeProduct from './activeProductReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    // como la clave es igual al valor, no es necesario ponerla
    productList,
    activeProduct,
    cart
});

export default rootReducer;