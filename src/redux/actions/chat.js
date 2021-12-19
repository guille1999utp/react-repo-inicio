import { types } from "../types/chat";

export const userchat = (usuario) =>({
type: types.usuariosCargados,
payload: usuario
})
export const activarchat = (uid) =>({
    type: types.activarChat,
    payload: uid
    })  
export const obtenermensajes = (mensajes) =>({
 type: types.nuevoMensaje,
 payload: mensajes
 })
export const regeneratechat = () =>({
    type: types.regenerate
   })