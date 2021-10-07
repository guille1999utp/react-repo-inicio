import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './componentes/App';
import Register from './componentes/Register';
import Iniciarsesion from './componentes/Iniciar-sesion';
import { BrowserRouter as Router, Route  } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <App />
  <Route path="/login" component={ Iniciarsesion }/>
  <Route path="/register" component={ Register }/>
  </Router>
 ,
  document.getElementById('root')
);
