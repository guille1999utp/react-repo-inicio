import { types } from "../types/authLogin";

function reducer(state = {usuario:''}, action){
    switch (action.types){
        case types.login:
            return {
            usuario: action.payload.nombre
            }

        case types.logout:
            return {
            }
        default:
            return state
    }

}

export default reducer;