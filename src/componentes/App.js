import store from '../redux/store';
import { Provider } from 'react-redux';
import Rutas from '../Rutas/Rutas';
import { SocketProvider } from '../redux/context/contextchat'

import moment from 'moment';
import 'moment/locale/es';
moment.locale('es');


const App = () => {
 
  return (
    <Provider store={store}>
    <SocketProvider>
    <Rutas/>
    </SocketProvider>
    </Provider>
  );
}

export default App;