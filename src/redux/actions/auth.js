import { types } from "../types/authLogin";

export const loginstate = (usuario) =>({
type: types.login,
payload: usuario
})