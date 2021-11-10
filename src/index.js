

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Register from './componentes/Register';
import Listprod from './componentes/Listprod';
import Iniciarsesion from './componentes/Iniciar-sesion';
import Producto from './componentes/Producto';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Inicio from './componentes/Inicio';

import App from './componentes/App';
import Chat from './componentes/Chat';
import Carrito from './componentes/Carrito';


ReactDOM.render(
  <Router>
  <App />
  <Route path="/login" component={ Iniciarsesion }/>
  <Route path="/register" component={ Register }/>
  <Route path="/productover" component={ Listprod }/>
  <Route path="/producto/:id" component={ Producto }/>
  <Route path="/inicio" component={ Inicio }/>
  <Route path="/chat" component={ Chat }/>
  <Route path="/carrito" component={ Carrito }/>
  </Router>
 ,
  document.getElementById('root')
);
