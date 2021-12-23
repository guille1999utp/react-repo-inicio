import React, {useEffect,useCallback, createContext} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { regenerate,loginstate } from '../actions/auth';
import { userchat,obtenermensajes } from '../actions/chat';
import { subirOrden, eliminarorden } from '../actions/ordenar';
import { fetchCToken } from '../../helpers/fetchmetod';
import { useSocket } from "../../SocketsConnection/useSocket";
import { scrollToBottomAnimated } from '../../helpers/scrollToBottom';

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
    }, [ state, conectarSocket ]);

    useEffect(() => {
        if ( !state.online ) {
            desconectarSocket();
        }
    }, [ state, desconectarSocket ]);

    useEffect(() => {
        
      socket?.on( 'lista-usuarios', (usuarios) => {
          dispatch(userchat(usuarios));
      })

  }, [ socket, dispatch ]);
  useEffect(() => {
    socket?.on( 'mensaje', (mensaje) => {
    dispatch(obtenermensajes(mensaje));
    })
    scrollToBottomAnimated('mensajes')
}, [ socket , dispatch]);

useEffect(() => {
    socket?.on( 'orden', (orden) => {
        if(orden.de === state.uid){
            dispatch(subirOrden(orden));
        }
    })
}, [ socket , dispatch, state.uid]);

useEffect(() => {
    socket?.on( 'eliminarorden', (oid) => {
            dispatch(eliminarorden(oid));
    })
}, [ socket , dispatch, state.uid]);
    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}