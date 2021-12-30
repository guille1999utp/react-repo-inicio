import React, {useContext}from 'react'
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
import { SocketContext } from '../redux/context/contextchat'
import Perfil from '../componentes/Perfil';
import { CrearProducto } from '../componentes/CrearProducto';
export default function Rutas() {
    const {online} = useContext(SocketContext);
    return (
        <Router>
  <Header/>
  <Switch>
  <Rutapublica isAuthenticated={online} path="/login" component={ Iniciarsesion }/>
  <Rutapublica isAuthenticated={online} path="/register" component={ Register }/>
  <Route exact path="/busqueda" component={ Listprod }/>
  <Route exact path="/producto/:id" component={ Producto }/>
  <Rutaprivada isAuthenticated={online}  path="/crearproducto" component={ CrearProducto }/>
  <Route exact path="/perfil/:de" component={ Perfil }/>
  <Route exact path="/" component={ Inicio }/>
  <Rutaprivada isAuthenticated={online} path='/chat' component={Chat}/>
  <Rutaprivada isAuthenticated={online} path='/comprar' component={Compra}/>
  <Rutaprivada isAuthenticated={online} path='/carrito' component={Carrito}/>
  <Rutaprivada isAuthenticated={online} path='/ajustes' component={Configuracion}/>
  <Rutaprivada isAuthenticated={online} path='/ordenar' component={Ordenar}/>
  <Rutaprivada isAuthenticated={online} path='/solicitudes' component={Solicitudes}/>
  <Redirect from='/' to='/'/>
  </Switch>
  </Router>
    )
}
