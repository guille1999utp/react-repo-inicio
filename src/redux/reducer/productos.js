import { types } from '../types/productos';

 const initialState = {
     productos: [], 
     fotosproducto:[],
     parrafosproducto:[]
 }

 function Reducer ( state= initialState, action ){
    switch ( action.type ) {
        
        case types.cargarProductos:
             return {
                 ...state,
                 productos: action.payload
             }
        case types.cargarfotosproductos:
             return {
                  ...state,
                  fotosproducto: action.payload
                }
         case types.agregarProducto:
              return {
                  ...state,
                   productos: [action.payload,...state.productos]
             }
         case types.añadirProductoproducto:
              return {
                  ...state,
                  parrafosproducto: [...state.parrafosproducto,action.payload]
               }
         case types.cargarparrafoproducto:
              return {
                  ...state,
                  parrafosproducto: action.payload
             }
         case types.eliminarfotoproducto:
              return {
                   ...state,
                   fotosproducto: state.fotosproducto.filter(function(producto){
                    return action.payload.public_id !== producto.public_id;
                  })
               }
         case types.eliminarparrafoproducto:
              return {
                   ...state,
                   parrafosproducto: state.parrafosproducto.filter(function(parrafo,i){
                     return i !== action.payload;
          })
                 }
         case types.agregarFotoProducto:
              return {
                    ...state,
                    fotosproducto: [...state.fotosproducto,action.payload]
                 }
        case types.modificarproducto:
              return {
                  ...state,
                   productos: state.productos.map(function(producto){
                       if(action.payload.pid !== producto.pid){
                        return producto;
                       }else{
                        return action.payload;
                       }
             })
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