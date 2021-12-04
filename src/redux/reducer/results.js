import { types } from "../types/results";
function reducer(state={}, action){
    switch (action.types){
        case types.busqueda:
            return {
                name : action.payload.name
            }

        case types.fin:
            return {
                ...state,
                resultado: action.payload.resultado
            }
        default:
            return state
    }

}

export default reducer;