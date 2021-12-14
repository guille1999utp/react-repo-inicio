import { createStore, combineReducers } from "redux";
import results from "./reducer/results";
import infoUsuario from "./reducer/usuario";
const reducer = combineReducers({
results,
infoUsuario
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
export default store 