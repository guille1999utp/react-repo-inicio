import store from '../redux/store';
import { Provider } from 'react-redux';
import Rutas from '../Rutas/Rutas';

const App = () => {
 
  return (
      <Provider store={store}>
    <Rutas/>
  </Provider>
  );
}

export default App;