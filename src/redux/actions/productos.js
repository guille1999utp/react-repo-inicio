import { types } from "../types/productos";

export const cargarproductos = (productos) =>({
    type: types.cargarProductos,
    payload: productos
    })

export const eliminarproducto = (pid) =>({
     type: types.eliminaProducto,
     payload: pid

})

export const eliminarfotoproducto = (fotouid) =>({
    type: types.eliminarfotoproducto,
    payload: fotouid

})

export const eliminarparrafoproducto = (index) =>({
    type: types.eliminarparrafoproducto,
    payload: index

})


export const agregarfotoproducto = (producto) =>({
    type: types.agregarFotoProducto,
    payload: producto

})

export const modificarproducto = (producto) =>({
    type: types.modificarproducto,
    payload: producto

})

export const añadirproducto = (producto) =>({
    type: types.agregarProducto,
    payload: producto

})

export const añadirfotosproducto = (fotos) =>({
    type: types.cargarfotosproductos,
    payload: fotos

})

export const cargarparrafoproducto = (parrafos) =>({
    type: types.cargarparrafoproducto,
    payload: parrafos

})

export const añadirProductoproducto = (parrafo) =>({
    type: types.añadirProductoproducto,
    payload: parrafo

})

export const resetpro = () =>({
    type: types.añadirProductoproducto,
})