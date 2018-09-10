import{
    // importamos las acciones
    LOAD_CART_ITEMS,
    ADD_CART_ITEM,
    REMOVE_CART_ITEM
} from '../actions/type';
//importamos estado inicial
import initialState from './initialState';

export default function cartReducer (state = initialState.cart, action) {
switch (action.type) {
    case LOAD_CART_ITEMS:
        return{
            // ccopia del estado
            ...state,
            // siempre vamos a querer una copia del array de items que haya en el carrito
            // al navegar entre vistas, por eso tendremos que crear copia del array de 
            // items al cargar el estado del carrito
            items: [...state.items]
        };
    case ADD_CART_ITEM:
        return{
            ...state,
            items: [...state.items, action.payload],
            // añadimos item al carrito y modificamos estado de precio
            total: state.total + action.payload.price,
        };
    case REMOVE_CART_ITEM: {
        // creamos arrow function en vez de object.assign, porque nos ahorramos código
        // devolvemos el id si corresponde con el action.payload, quiere decir:
        // creamos funcion llamada searchItem que le pasamos por parametro un item, si el id
        // de ese item corresponde con el de action.payload._id, el item será borrado del cart
        const searchItem = (elem) => elem.id === action.payload._id;
        //con find obtenemos el item completo con todos los atributos
        const item = state.items.find(searchItem);
        // con findIndex obtenemos la posicion que ocupa en el array
        const index = state.items.findIndex(searchItem);

        // devolvemos el state, con el nuevo array, sin el item borrado
        return{
            ...state,
            items: [
                // con slice, obtenemos una copia del array desde la posicion 0 a index
                ...state.items.slice(0, index),
                // aqui obtenemos el array resultante desde la siguiente posicion de index hasta el final
                ...state.items.slice(index+1)
            ],
            // le restamos el precio del item al total del carrito
            total: state.total - item.price           
        };
    }

    default:
        return state;
}
}