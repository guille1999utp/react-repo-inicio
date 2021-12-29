import { types } from "../types/authLogin";

export const loginstate = (usuario) =>({
type: types.login,
payload: usuario
})

export const regenerate = () =>({
  type: types.regenerate
 })

 export const actualizarfoto = (url) =>({
  type: types.UpdateFoto,
  payload: url
 })

 export const subidafotos = (urlcompleta) =>({
  type: types.RecibirFotos,
  payload: urlcompleta
 })

 export const borrarfotos = (urleliminar) =>({
  type: types.RecibirFotos,
  payload: urleliminar
 })