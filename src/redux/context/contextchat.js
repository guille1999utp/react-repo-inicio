import React, {useEffect,useCallback, createContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { regenerate,loginstate,actualizarfoto, subidafotos, borrarfotos } from '../actions/auth';
import { userchat,obtenermensajes } from '../actions/chat';
import { subirOrden, eliminarorden , recibirsolicitud, eliminarpedido} from '../actions/ordenar';
import { eliminarproducto ,añadirproducto, modificarproducto, agregarfotoproducto, eliminarfotoproducto, añadirProductoproducto,eliminarparrafoproducto,cargarventas, cargarcarrito, cargarcompras} from '../actions/productos';
import { fetchCToken } from '../../helpers/fetchmetod';
import { useSocket } from "../../SocketsConnection/useSocket";

export const SocketContext = createContext();
export const SocketProvider = ({ children }) => {

    const dispatch = useDispatch();
    const {  socket , online,  conectarSocket, desconectarSocket } = useSocket('http://localhost:4000');

    const verificartoken = useCallback(
     async() => {
       const token = localStorage.getItem('token');
       if(!token){
         dispatch(regenerate());
         return  false;
       }
       const res = await fetchCToken('renovacion');
       if(res.ok){
         res.usuario.online = true;
         localStorage.getItem('token',res.token);
         const {__v,...usuario} = res.usuario
         dispatch(loginstate(usuario));
         return  true;
       }else{
         dispatch(regenerate());
         return  false;
       }
     }, [dispatch],
   )
     useEffect(() => {
       verificartoken();
     }, [verificartoken])

    const state = useSelector(state => state.infoUsuario);

    
    useEffect(() => {
        if ( state.online ) {
            conectarSocket();
        }
    }, [ state.online, conectarSocket ]);

    useEffect(() => {
        if ( !state.online ) {
            desconectarSocket();
        }
    }, [ state.online, desconectarSocket ]);

    useEffect(() => {
  
    socket?.on( 'lista-usuarios', (usuarios) => {
          dispatch(userchat(usuarios));
      })
  }, [ socket, dispatch]);
  
  useEffect(() => {
  
    socket?.on( 'lista-vendidos', (ventas) => {
          dispatch(cargarventas(ventas));
      })
  }, [ socket, dispatch]);


  useEffect(() => {
      socket?.on( 'lista-carrito', (productos) => {
            dispatch(cargarcarrito(productos));
        })
    }, [ socket, dispatch]);

    useEffect(() => {
      socket?.on( 'lista-compras', (compras) => {
            dispatch(cargarcompras(compras));
        })
    }, [ socket, dispatch]);

  useEffect(() => {
  
    socket?.on( 'productomodificar', (producto) => {
      dispatch(modificarproducto(producto));
    })
  }, [ socket, dispatch]);

  useEffect(() => {
  
    socket?.on( 'productoeliminar', (pid) => {
      dispatch(eliminarproducto(pid));
    })
  }, [ socket, dispatch]);
  
  useEffect(() => {
  
    socket?.on( 'subirfotoadicionalproducto', (producto) => {
      dispatch(agregarfotoproducto(producto));
    })
  }, [ socket, dispatch]);
  useEffect(() => {
  
    socket?.on( 'producto', (product) => {
      dispatch(añadirproducto(product));
    })
  }, [ socket, dispatch]);

  useEffect(() => {
  
    socket?.on( 'fotoproductoeliminar', (urlconver) => {
      dispatch(eliminarfotoproducto(urlconver));
    })
  }, [ socket, dispatch]);

  useEffect(() => {
  
    socket?.on( 'productoparrafoeliminar', (index) => {
      dispatch(eliminarparrafoproducto(index));
      console.log(index)
    })
  }, [ socket, dispatch]);

  useEffect(() => {
  
    socket?.on( 'subirparrafonuevo', (Parrafo) => {
      dispatch(añadirProductoproducto(Parrafo));
    })
  }, [ socket, dispatch]);

  useEffect(() => {
    socket?.on( 'mensaje', (mensaje) => {
      console.log(mensaje)
    dispatch(obtenermensajes(mensaje));
    })
}, [ socket , dispatch]);

useEffect(() => {
  socket?.on( 'fotouseradicional', ({urlfoto,uidfoto}) => {
 const urlcompleta = {urlfoto,uidfoto}
     dispatch(subidafotos(urlcompleta));
  })
}, [ socket , dispatch]);

useEffect(() => {
  socket?.on( 'fotousereliminar', (uidfoto) => {
     dispatch(borrarfotos(uidfoto));
  })
}, [ socket , dispatch]);

useEffect(() => {
  socket?.on( 'fotouser', (url) => {
  dispatch(actualizarfoto(url));
  })
}, [ socket , dispatch]);
useEffect(() => {
    socket?.on( 'orden', (orden) => {
        if(orden.de === state.uid){
            dispatch(subirOrden(orden));
        }
        if(orden.de !== state.uid){
          dispatch(recibirsolicitud(orden));
      }
    })
}, [ socket , dispatch, state.uid]);

useEffect(() => {
    socket?.on( 'eliminarorden', (oid) => {
            dispatch(eliminarorden(oid));
            dispatch(eliminarpedido(oid));
    })
}, [ socket , dispatch, state.uid]);
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}