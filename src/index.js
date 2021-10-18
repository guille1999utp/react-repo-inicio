import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import Register from './componentes/Register';
import Listprod from './componentes/Listprod';
import Iniciarsesion from './componentes/Iniciar-sesion';
import Producto from './componentes/Producto';
import { BrowserRouter as Router, Route  } from 'react-router-dom';


ReactDOM.render(
  <Router>
  <App />
  <Route path="/login" component={ Iniciarsesion }/>
  <Route path="/register" component={ Register }/>
  <Route path="/inicio" component={ Listprod }/>
  <Route path="/producto/:id" component={ Producto }/>
  </Router>
 ,
  document.getElementById('root')
);
