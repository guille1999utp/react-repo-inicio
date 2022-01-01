import { types } from "../types/productos";

export const cargarproductos = (productos) =>({
    type: types.cargarProductos,
    payload: productos
    })

export const eliminarproducto = (pid) =>({
     type: types.eliminaProducto,
     payload: pid

})

export const modificarproducto = (producto) =>({
    type: types.modificarproducto,
    payload: producto

})

export const añadirproducto = (producto) =>({
    type: types.agregarProducto,
    payload: producto

})