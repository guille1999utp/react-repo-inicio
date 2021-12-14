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
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { regenerate,loginstate } from '../redux/actions/auth';
import { fetchCToken } from '../helpers/fetchmetod';


export default function Rutas() {

    const dispatch = useDispatch();
    const verificartoken = useCallback(
     async() => {
       const token = localStorage.getItem('token');
       if(!token){
         dispatch(regenerate());
         return  false;
       }
       const res = await fetchCToken('renovacion');
       if(res.ok){
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
    const state = useSelector(state => state.infoUsuario.usuario);
    return (
        <Router>
  <Header/>
  <Switch>
  <Route exact path="/login" component={ Iniciarsesion }/>
  <Route exact path="/register" component={ Register }/>
  <Route exact path="/productover" component={ Listprod }/>
  <Route exact path="/producto/:id" component={ Producto }/>
  <Route exact path="/" component={ Inicio }/>
  <Rutaprivada isAuthenticated={!state?false:state} path='/chat' component={Chat}/>
  <Rutaprivada isAuthenticated={!state?false:state} path='/comprar' component={Compra}/>
  <Rutaprivada isAuthenticated={!state?false:state} path='/carrito' component={Carrito}/>
  <Rutaprivada isAuthenticated={!state?false:state} path='/ajustes' component={Configuracion}/>
  <Rutaprivada isAuthenticated={!state?false:state} path='/ordenar' component={Ordenar}/>
  <Rutaprivada isAuthenticated={!state?false:state} path='/solicitudes' component={Solicitudes}/>
  <Redirect from='/' to='/'/>
  </Switch>
  </Router>
    )
}
