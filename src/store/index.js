import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { tiempoCiudad } from '../reductores/tiempoCiudad';

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const estadoInicial = {
    datos: [],
    seleccionada: null
};

export const store = createStore(
    tiempoCiudad,
    estadoInicial,
    composeEnhacers(applyMiddleware(thunk))
);