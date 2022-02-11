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
export const eliminarpedido = (oid) =>({
    type: types.solicitudrechazada,
    payload: oid
    })
export const cargarsolicitudes = (solicitudes) =>({
    type: types.solicitudes,
    payload: solicitudes
    })
export const recibirsolicitud = (solicitud) =>({
    type: types.solicitud,
    payload: solicitud
    })
