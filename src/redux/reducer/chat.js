import { types } from '../types/chat';

 const initialState = {
     uid: '',
     chatActivo: null, 
     usuarios: [], 
     mensajes: [],
 }

 function Reducer ( state= initialState, action ){


    switch ( action.type ) {
        case types.chatsolicitud:
            return {
                ...state,
                uid: [ ...action.payload ]
            }
        case types.usuariosCargados:
            return {
                ...state,
                usuarios: [ ...action.payload ]
            }
        
        case types.activarChat:
            if ( state.chatActivo === action.payload ) return state;

            return {
                ...state,
                chatActivo: action.payload,
                mensajes: []
            }


        case types.nuevoMensaje:
            if ( state.chatActivo?.iduser === action.payload.de || state.chatActivo?.iduser === action.payload.para ) {
                return {
                    ...state,
                    mensajes: [ ...state.mensajes, action.payload ]
                }
            } else {
                return state;
            }

        case types.cargarMensajes:
            return {
                ...state,
                mensajes: [ ...action.payload ]
            }
            case types.regenerate:
                return initialState;
    
        default:
            return state;
    }

}
export default Reducer;