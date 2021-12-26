import { types } from "../types/authLogin";
const initstate = {
nombre:"",
correo:"",
online:false,
fechnacimiento:"",
creacion:"",
uid:"",
urlfoto: ""

}
function reducer(state = initstate, action){
    switch (action.type){
        case types.login:
            return {
            ...state,
            nombre: action.payload.nombre,
            correo: action.payload.correo,
            online: action.payload.online,
            fechnacimiento: action.payload.fechnacimiento,
            creacion: action.payload.creacion,
            uid: action.payload.uid,
            urlfoto: action.payload.urlfoto
            }
        case types.UpdateFoto:
            return {
                ...state,
                urlfoto: action.payload
            }
        case types.regenerate:
            return initstate
        default:
            return state
    }

}

export default reducer;