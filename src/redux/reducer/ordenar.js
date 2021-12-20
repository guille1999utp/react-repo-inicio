import { types } from '../types/ordenar';

 const initialState = {
     pid: '',
     producto: [], 
 }

 function Reducer ( state= initialState, action ){


    switch ( action.type ) {
        
        case types.subir:
            return {
                ...state
            }
        
        case types.eliminar:
            return {
                ...state
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