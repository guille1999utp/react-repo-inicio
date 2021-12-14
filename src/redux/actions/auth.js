import { types } from "../types/authLogin";

export const loginstate = (usuario) =>({
type: types.login,
payload: usuario
})

export const regenerate = () =>({
  type: types.regenerate
 })