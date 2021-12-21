import { types } from "../types/ordenar";

export const subirOrden = (orden) =>({
    type: types.subir,
    payload: orden
    })
export const cargarordenes = (ordenes) =>({
    type: types.cargar,
    payload: ordenes
    })

export const eliminarorden = (orden) =>({
    type: types.eliminar,
    payload: orden
    })