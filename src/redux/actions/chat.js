import { types } from "../types/chat";

export const userchat = (usuario) =>({
type: types.usuariosCargados,
payload: usuario
})
export const chatsolicitud = (oid) =>({
    type: types.chatsolicitud,
    payload: oid
    })
export const activarchat = (user) =>({
    type: types.activarChat,
    payload: user
    })  
export const obtenermensajes = (mensajes) =>(
    {
 type: types.nuevoMensaje,
 payload: mensajes
 })
export const regeneratechat = () =>({
    type: types.regeneratechat
   })
export const exitChat = () =>({
type: types.exitChat
})
 export const Cargarmensajeschat = (mensajes) =>({
  type: types.cargarMensajes,
 payload: mensajes
 })