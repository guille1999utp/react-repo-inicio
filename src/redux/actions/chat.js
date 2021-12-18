import { types } from "../types/chat";

export const userchat = (usuario) =>({
type: types.usuariosCargados,
payload: usuario
})
export const regeneratechat = () =>({
    type: types.regenerate
   })