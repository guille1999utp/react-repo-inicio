import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import store from './redux/store';
import Register from './Register';
import Listprod from './Listprod';
import Iniciarsesion from './Iniciar-sesion';
import Producto from './Producto';
import Inicio from './Inicio';
import Header from './Header';
import Chat from './Chat';
import Carrito from './Carrito';
import Configuracion from './Configuracion';
import Ordenar from './Ordenar';
import Solicitudes from './Solicitudes';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <Provider store={store}>
    <Router>
  <Header/>
  <Switch>
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
  <Redirect from='/' to='/inicio'/>
  </Switch>
  </Router>
  </Provider>
  );
}

export default App;