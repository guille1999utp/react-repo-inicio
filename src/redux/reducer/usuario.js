import { types } from "../types/authLogin";

function reducer(state = {}, action){
    switch (action.types){
        case types.login:
            return {
            ...state,
            usuario: action.payload
            }

        case types.logout:
            return {
            }
        default:
            return state
    }

}

export default reducer;