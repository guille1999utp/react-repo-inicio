import React, {useEffect,useCallback} from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Register from '../componentes/Register';
import Listprod from '../componentes/Listprod';
import Iniciarsesion from '../componentes/Iniciar-sesion';
import Producto from '../componentes/Producto';
import Inicio from '../componentes/Inicio';
import Header from '../componentes/Header';
import Chat from '../componentes/Chat';
import Carrito from '../componentes/Carrito';
import Compra from '../componentes/Compra';
import Configuracion from '../componentes/Configuracion';
import Ordenar from '../componentes/Ordenar';
import Solicitudes from '../componentes/Solicitudes';
import { Rutaprivada } from '../Rutas/Rutaprivada';
import { Rutapublica } from '../Rutas/Rutapublica';
import { useDispatch, useSelector } from 'react-redux';
import { regenerate,loginstate } from '../redux/actions/auth';
import { userchat,obtenermensajes } from '../redux/actions/chat';
import { fetchCToken } from '../helpers/fetchmetod';
import { useSocket } from "../SocketsConnection/useSocket";

export default function Rutas() {
    const dispatch = useDispatch();
    const {  socket , conectarSocket, desconectarSocket } = useSocket('http://localhost:4000');

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
}, [ socket , dispatch]);

    
    return (
        <Router>
  <Header/>

  <Switch>
  <Rutapublica isAuthenticated={state.online} path="/login" component={ Iniciarsesion }/>
  <Rutapublica isAuthenticated={state.online} path="/register" component={ Register }/>
  <Route exact path="/productover" component={ Listprod }/>
  <Route exact path="/producto/:id" component={ Producto }/>
  <Route exact path="/" component={ Inicio }/>
  <Rutaprivada isAuthenticated={state.online} path='/chat' component={Chat}/>
  <Rutaprivada isAuthenticated={state.online} path='/comprar' component={Compra}/>
  <Rutaprivada isAuthenticated={state.online} path='/carrito' component={Carrito}/>
  <Rutaprivada isAuthenticated={state.online} path='/ajustes' component={Configuracion}/>
  <Rutaprivada isAuthenticated={state.online} path='/ordenar' component={Ordenar}/>
  <Rutaprivada isAuthenticated={state.online} path='/solicitudes' component={Solicitudes}/>
  <Redirect from='/' to='/'/>
  </Switch>
  </Router>
    )
}
