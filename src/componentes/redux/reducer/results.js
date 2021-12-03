import { types } from "../types/results";
function reducer(state={}, action){
    switch (action.types){
       
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