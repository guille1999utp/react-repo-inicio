import { types } from '../types/productos';

 const initialState = {
     productos: [], 
 }

 function Reducer ( state= initialState, action ){
    switch ( action.type ) {
        
        case types.cargarProductos:
             return {
                 ...state,
                 productos: action.payload
             }
         case types.agregarProducto:
              return {
                  ...state,
                   productos: [action.payload,state.productos]
             }
        case types.eliminaProducto:
             return {
                ...state,
                productos: state.productos.filter(function(producto){
                    return action.payload !== producto.pid;
                  })
                }
         
        default:
            return state;
    }

}
export default Reducer;