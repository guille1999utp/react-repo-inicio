import { types } from '../types/ordenar';

 const initialState = {
     pid: '',
     producto: [], 
 }

 function Reducer ( state= initialState, action ){
    switch ( action.type ) {
        
        case types.subir:
            return {
                ...state,
                producto: [action.payload,...state.producto]
            }
        case types.cargar:
             return {
                 ...state,
                 producto: action.payload
             }
        case types.eliminar:
            return {
                ...state,
                producto: state.producto.filter(function(producto){
                    console.log(producto)
                    return action.payload !== producto.oid;
                  })
            }

        case types.eliminacionexito:
            return {
                ...state
            }
        default:
            return state;
    }

}
export default Reducer;