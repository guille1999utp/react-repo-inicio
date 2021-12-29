import { types } from "../types/authLogin";
const initstate = {
nombre:"",
correo:"",
online:false,
fechnacimiento:"",
creacion:"",
uid:"",
urlfoto: "",
fotosdescripsion: [],
verificado: false
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
            urlfoto: action.payload.urlfoto,
            fotosdescripsion: action.payload.fotosdescripsion,
            verificado: action.payload.verificado
            }
        case types.UpdateFoto:
            return {
                ...state,
                urlfoto: action.payload
            }
        case types.RecibirFotos:
            return {
                 ...state,
                fotosdescripsion: [...state.fotosdescripsion, action.payload]
                }   
        case types.Eliminarfoto:
            return {
                 ...state,
                fotosdescripsion: state.fotosdescripsion.filter(function(foto){
                    return action.payload !== foto.uidfoto;
                      })
                }   
        case types.regenerate:
            return initstate
        default:
            return state
    }

}

export default reducer;