import { createStore, combineReducers } from "redux";
import results from "./reducer/results";
import infoUsuario from "./reducer/usuario";
import chat from "./reducer/chat";
import ordenar from "./reducer/ordenar";
import productos from "./reducer/productos";


const reducer = combineReducers({
results,
chat,
infoUsuario,
ordenar,
productos
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store 