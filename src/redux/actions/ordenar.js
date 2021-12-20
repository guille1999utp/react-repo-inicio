import { types } from "../types/ordenar";

export const subirOrden = (orden) =>({
    type: types.subir,
    payload: orden
    })