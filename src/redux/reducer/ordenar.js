import { types } from '../types/ordenar';

 const initialState = {
     solicitudes: [],
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
                    return action.payload !== producto.oid;
                  })
            }
         case types.solicitudrechazada:
             return {
               ...state,
               solicitudes: state.solicitudes.filter(function(solicitud){
                    return action.payload !== solicitud.oid;
                      })
                }
        case types.eliminacionexito:
            return {
                ...state
            }
        case types.solicitudes:
            return {
                ...state,
                solicitudes : action.payload
            }
        case types.solicitud:
            return {
                ...state,
                solicitudes : [ action.payload, ...state.solicitudes ]
            }
        default:
            return state;
    }

}
export default Reducer;