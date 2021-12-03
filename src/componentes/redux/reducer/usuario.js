import { types } from "../types/authLogin";
function reducer(state={}, action){
    switch (action.types){
        case types.login:
            return {
            uid: action.payload.id,
            name : action.payload.name
            }

        case types.logout:
            return {
            }
        default:
            return state
    }

}

export default reducer;