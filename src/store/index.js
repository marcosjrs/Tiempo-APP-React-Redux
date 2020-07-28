import { createStore, applyMiddleware, compose } from 'redux';
import { tiempoCiudad } from '../reductores/tiempoCiudad';

const estadoInicial = {
    datos: [],
    seleccionada: null
};

export const store = createStore(
    tiempoCiudad,
    estadoInicial,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);