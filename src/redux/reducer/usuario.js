import { types } from "../types/authLogin";

function reducer(state = {}, action){
    switch (action.type){
        case types.login:
            return {
            ...state,
            usuario: action.payload
            }

        case types.regenerate:
            return {}
        default:
            return state
    }

}

export default reducer;