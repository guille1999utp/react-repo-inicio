

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Register from './componentes/Register';
import Listprod from './componentes/Listprod';
import Iniciarsesion from './componentes/Iniciar-sesion';
import Producto from './componentes/Producto';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import AppBar from './componentes/AppBar';


ReactDOM.render(
  <Router>
  <AppBar />
  <Route path="/login" component={ Iniciarsesion }/>
  <Route path="/register" component={ Register }/>
  <Route path="/productover" component={ Listprod }/>
  <Route path="/producto/:id" component={ Producto }/>
  <Route path="/inicio" component={ Inicio }/>
  </Router>
 ,
  document.getElementById('root')
);
