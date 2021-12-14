import store from '../redux/store';
import { Provider } from 'react-redux';
import Rutas from '../Rutas/Rutas';
import ButtonLogout from '../componentes/ButtonLogout';

const App = () => {
 
  return (
      <Provider store={store}>
    <Rutas/>
    <ButtonLogout/>

  </Provider>
  );
}

export default App;