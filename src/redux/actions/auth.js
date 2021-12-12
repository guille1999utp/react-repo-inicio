import { types } from "../types/authLogin";

export const loginstate = (usuario) =>{
    return {
types: types.login,
payload: {
  usuario
}
}}