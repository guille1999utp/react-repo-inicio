import './AppBar.css';
import { Route, BrowserRouter } from 'react-router';
import Register from './componentes/Register';
import Listprod from './componentes/Listprod';
import Iniciarsesion from './componentes/Iniciar-sesion';
import Producto from './componentes/Producto';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Inicio from './componentes/Inicio';

import Header from './componentes/Header';
import Chat from './componentes/Chat';
import Carrito from './componentes/Carrito';
import Configuracion from './componentes/Configuracion';
import Ordenar from './componentes/Ordenar';
import Solicitudes from './componentes/Solicitudes';

function App() {
  return (
    <>
    <BrowserRouter>
  <Header />
  <Route path="/login" component={ Iniciarsesion }/>
  <Route path="/register" component={ Register }/>
  <Route path="/productover" component={ Listprod }/>
  <Route path="/producto/:id" component={ Producto }/>
  <Route path="/inicio" component={ Inicio }/>
  <Route path="/chat" component={ Chat }/>
  <Route path="/carrito" component={ Carrito }/>
  <Route path="/ajustes" component={ Configuracion }/>
  <Route path="/ordenar" component={ Ordenar }/>
  <Route path="/solicitudes" component={ Solicitudes }/>
  </BrowserRouter>
    </>
  );
}

export default App;